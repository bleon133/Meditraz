using System.ComponentModel.DataAnnotations;

namespace MediTrazAppFinal.Models
{
    public class Charge
    {

        [Key]
        public int idCharge { get; set; }

        [Required]
        public string nameCharge { get; set; }

        [Required]
        public string workArea { get; set; }
    }
}


