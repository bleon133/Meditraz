using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MediTrazAppFinal.Models
{
    public class User
    {
        [ForeignKey("Charge")]
        public int idChargeUse { get; set; }

        [Key]
        public int idUser { get; set; }

        [Required]
        public string username { get; set; } 
        
        [Required]
        public string password { get; set; }

        [Required]
        public string name { get; set; }

        [Required]
        public string lastName { get; set; }

        [Required]
        public string email { get; set; }

        [Required]
        public string cellPhone { get; set; }

        [Required]
        public DateTime birthdate { get; set; }

        [Required]
        public string identificationCard { get; set; }

        [Required]
        public string cardId { get; set; }

        [Required]
        public string gender { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

    }
}
