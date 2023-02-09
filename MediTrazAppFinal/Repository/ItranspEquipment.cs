using MediTrazAppFinal.Models;
using MediTrazAppFinal.Models.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MediTrazAppFinal.Repository
{
    public interface ItranspEquipment
    {
        Task<int> RegisterEquipments(transpEquipment transEquip);

        Task<List<transpEquipmentDTO>> GetAllEquipts();

        Task<bool> EquipExists(string codeEquip);
    }
}
