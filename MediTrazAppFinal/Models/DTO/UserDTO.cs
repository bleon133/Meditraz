using System;

namespace MediTrazAppFinal.Models.DTO
{
    public class UserDTO
    {
        public int idChargeUse { get; set; }

        public int idUser { get; set; }

        public string username { get; set; }

        public string password { get; set; }

        public string name { get; set; }

        public string lastName { get; set; }

        public string email { get; set; }

        public string cellPhone { get; set; }

        public DateTime birthdate { get; set; }

        public string identificationCard { get; set; }

        public string cardId { get; set; }

        public string gender { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }
    }
}
