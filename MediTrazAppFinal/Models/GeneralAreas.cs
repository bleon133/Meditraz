using System.ComponentModel.DataAnnotations;

namespace MediTrazAppFinal.Models
{
    public class GeneralAreas
    {
        [Key]
        public int idGeneralArea { get; set; }

        [Required]
        public string ubicationArea { get; set; }

        [Required]
        public string wareHouse { get; set; }

        public string commentWareHouse { get; set; }
    }
}
