using AutoMapper;
using AutoMapper.Configuration;
using MediTrazAppFinal.Data;
using MediTrazAppFinal.Models;
using MediTrazAppFinal.Models.DTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MediTrazAppFinal.Repository
{
    public class storedMedicines : IstoredMedicines
    {
        private readonly ApplicationDBContext _db;
        private IMapper _mapper;

        public storedMedicines(ApplicationDBContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        public async Task<int> ActualizarMedicinas(storedMedicine medicines)
        {
            _db.Entry(medicines).State = EntityState.Modified;
            await _db.SaveChangesAsync();

            return 200;
        }

        public async Task<List<storedMedicineDTO>> GetAllMedicines()
        {
            List<storedMedicine> lista = await _db.storedMedicines.ToListAsync();
            return _mapper.Map<List<storedMedicineDTO>>(lista);
        }

        public async Task<storedMedicineDTO> GetMedicineById(int id)
        {

            var medicine = await _db.storedMedicines.FindAsync(id);
            return _mapper.Map<storedMedicineDTO>(medicine);

        }

        public async Task<int> RegisterMedicines(storedMedicine medicine)
        {
            try
            {
                if (await EquipExists(medicine.codeMedicine))
                {
                    return -1;

                }
                await _db.storedMedicines.AddAsync(medicine);
                await _db.SaveChangesAsync();
                return medicine.idStoredMedicines;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<bool> EquipExists(string barCode)
        {
            if (await _db.storedMedicines.AnyAsync(x => x.codeMedicine.ToLower().Equals(barCode.ToLower())))
            {
                return true;
            }
            return false;
        }
    }
}
