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
    public class transpEquipments : ItranspEquipment
    {
        private readonly ApplicationDBContext _db;
        private IMapper _mapper;
      

        public transpEquipments(ApplicationDBContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
           
        }

        public async Task<List<transpEquipmentDTO>> GetAllEquipts()
        {
            List<transpEquipment> lista = await _db.transpEquiments.ToListAsync();
            return _mapper.Map<List<transpEquipmentDTO>>(lista);
        }

        public async Task<int> RegisterEquipments(transpEquipment transEquip)
        {
            try
            {
                if (await EquipExists(transEquip.codeEquip))
                {
                    return -1;

                }
                await _db.transpEquiments.AddAsync(transEquip);
                await _db.SaveChangesAsync();
                return transEquip.idTranspEquip;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<bool> EquipExists(string codeEquip)
        {
            if (await _db.transpEquiments.AnyAsync(x => x.codeEquip.ToLower().Equals(codeEquip.ToLower())))
            {
                return true;
            }
            return false;
        }
    }
}
