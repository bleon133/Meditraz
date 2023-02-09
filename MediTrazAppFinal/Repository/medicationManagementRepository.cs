using AutoMapper;
using MediTrazAppFinal.Data;
using MediTrazAppFinal.Models;
using MediTrazAppFinal.Models.DTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MediTrazAppFinal.Repository
{
    public class medicationManagementRepository : IMedicationManagement
    {
        private readonly ApplicationDBContext _db;
        private IMapper _mapper;


        public medicationManagementRepository(ApplicationDBContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;

        }


        public async Task<List<medicationManagementDTO>> GetAllManagements()
        {
            List<medicationManagement> lista = await _db.medicicationManagements.ToListAsync();
            return _mapper.Map<List<medicationManagementDTO>>(lista);
        }

        public async Task<medicationManagementDTO> GetManagementById(int id)
        {
            var request = await _db.medicicationManagements.FindAsync(id);
            return _mapper.Map<medicationManagementDTO>(request);
        }

        public async Task<int> ManagementCreate(medicationManagement request)
        {
            try
            {
                await _db.medicicationManagements.AddAsync(request);
                await _db.SaveChangesAsync();
                return -200;

            }
            catch (Exception)
            {

                return -500;
            }
        }
    }
}
