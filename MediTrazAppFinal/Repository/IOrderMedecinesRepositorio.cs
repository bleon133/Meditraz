using MediTrazAppFinal.Models;
using MediTrazAppFinal.Models.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MediTrazAppFinal.Repository
{
    public interface IOrderMedecinesRepositorio
    {
        Task<int> CreateOrderMedecines(OrderMedecines order);


        Task<List<OrderMedecinesDto>> GetOrderMedecines();

        Task<OrderMedecinesDto> GetOrderMedecinesById (int id);

        Task<bool> verifyMount(int idOne, int idTwo, int idThree, int amount, int amountTwo, int amountThree);

        Task<bool> verifyOrderNumber(int x);

        Task<bool> DeleteOrden(int id);

        Task<string> UpdateAmount(int amountOne, int amountTwo, int amountThree, int idOne, int idTwo, int idThree);
    }
}
