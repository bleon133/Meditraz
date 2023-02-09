using MediTrazAppFinal.Models;
using MediTrazAppFinal.Models.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MediTrazAppFinal.Repository
{
    public interface IstoredMedicines
    {
        Task<int> RegisterMedicines(storedMedicine medicine);

        Task<List<storedMedicineDTO>> GetAllMedicines();

        Task<int> ActualizarMedicinas(storedMedicine medicines);

        Task<storedMedicineDTO> GetMedicineById(int id);

        Task<bool> EquipExists(string barCode);
    }
}
