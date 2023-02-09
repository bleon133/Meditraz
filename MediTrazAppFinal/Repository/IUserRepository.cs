using MediTrazAppFinal.Models;
using MediTrazAppFinal.Models.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MediTrazAppFinal.Repository
{
    public interface IUserRepository
    {
        Task<string> Register(User user, string password);

        Task<string> Login(string username, string password);

        Task<bool> UserExist(string username);

        Task<List<UserDTO>> GetUsersRegisters();

        Task<UserDTO> getDataLoggin(string nameuser);

        Task<List<Charge>> GetCharges();

    }
}
