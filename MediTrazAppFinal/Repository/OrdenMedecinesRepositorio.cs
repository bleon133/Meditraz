using AutoMapper;
using MediTrazAppFinal.Models;
using MediTrazAppFinal.Models.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System;
using MediTrazAppFinal.Data;
using System.Linq;

namespace MediTrazAppFinal.Repository
{
    public class OrdenMedecinesRepositorio : IOrderMedecinesRepositorio
    {
        private readonly ApplicationDBContext _db;
        private IMapper _mapper;

        public OrdenMedecinesRepositorio(ApplicationDBContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        public async Task<int> CreateOrderMedecines(OrderMedecines request)
        {
            try
            {
                await _db.orderpMediciness.AddAsync(request);
                await _db.SaveChangesAsync();
                return -200;

            }
            catch (Exception)
            {

                return -500;
            }
        }

        public async Task<bool> DeleteOrden(int id)
        {
            try
            {
                OrderMedecines orden = await _db.orderpMediciness.FindAsync(id);
                if(orden == null)
                {
                    return false;
                }
                _db.orderpMediciness.Remove(orden);
                await _db.SaveChangesAsync();
                return true;
            }catch(Exception){
                return false;
            }
        }

        public async Task<List<OrderMedecinesDto>> GetOrderMedecines()
        {
            List<OrderMedecines> lista = await _db.orderpMediciness.ToListAsync();

            return _mapper.Map<List<OrderMedecinesDto>>(lista);
        }

        public async Task<OrderMedecinesDto> GetOrderMedecinesById(int id)
        {
            var request = await _db.orderpMediciness.FindAsync(id);
            return _mapper.Map<OrderMedecinesDto>(request);
        }

        public async Task<string> UpdateAmount(int amountOne, int amountTwo, int amountThree, int idOne, int idTwo, int idThree)
        {
            try
            {
                var medicineOne = await _db.storedMedicines.FindAsync(idOne);
                medicineOne.medicineEntryAmount = medicineOne.medicineEntryAmount - amountOne;
                _db.Entry(medicineOne).State = EntityState.Modified;
                await _db.SaveChangesAsync();

                if (idTwo != 0)
                {
                    var medicineTwo = await _db.storedMedicines.FindAsync(idTwo);
                    medicineTwo.medicineEntryAmount = medicineTwo.medicineEntryAmount - amountTwo;
                    _db.Entry(medicineTwo).State = EntityState.Modified;
                    await _db.SaveChangesAsync();
                    return "Cambios Guardados para medicina 2";
                }

                if (idThree != 0)
                {
                    var medicineThree = await _db.storedMedicines.FindAsync(idThree);
                    medicineThree.medicineEntryAmount = medicineThree.medicineEntryAmount - amountThree;
                    _db.Entry(medicineThree).State = EntityState.Modified;
                    await _db.SaveChangesAsync();
                    return "Cambios guardados para medicina 3";
                }

                return "cambios guardados para medicina 1";
            }
            catch (Exception)
            {
                return "Error Inesperado";
            }
        }

        public async Task<bool> verifyMount(int idOne, int idTwo, int idThree, int amount, int amountTwo, int amountThree)
        {
            var medicineOne = _db.storedMedicines.Find(idOne);
            var medicineTwo = _db.storedMedicines.Find(idTwo);
            var medicineThree = _db.storedMedicines.Find(idThree);

            if (medicineOne != null)
            {
                if (medicineTwo != null)
                {
                    if (medicineThree != null)
                    {
                        if (medicineOne.medicineEntryAmount > amount && medicineTwo.medicineEntryAmount > amountTwo && medicineThree.medicineEntryAmount > amountThree)
                        {
                            return true;
                        }
                        return false;

                    }
                    if (medicineOne.medicineEntryAmount > amount && medicineTwo.medicineEntryAmount > amountTwo)
                    {
                        return true;
                    }
                    return false;

                }
                if (medicineOne.medicineEntryAmount > amount)
                {
                    return true;
                }
                return false;
            }
            return false;
        }


        public async Task<bool> verifyOrderNumber(int x)
        {
            var sqlResult = _db.orderpMediciness
                                   .Select(m => m.orderNumber).ToList();

            int comparador = 0;

            do
            {
                comparador = 0;

                foreach (var item in sqlResult)
                {
                    if (x == item)
                    {
                        comparador++;
                    }
                }

            } while (comparador != 0);

            return true;
        }



    }
}
