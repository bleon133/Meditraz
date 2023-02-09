using MediTrazAppFinal.Models;
using MediTrazAppFinal.Models.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MediTrazAppFinal.Repository
{
    public interface IMedicationManagement
    {
        Task<int> ManagementCreate(medicationManagement request);

        Task<List<medicationManagementDTO>> GetAllManagements();

        Task<medicationManagementDTO> GetManagementById(int id);
    }
}
