using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MediTrazAppFinal.Models
{
    public class OrderMedecines
    {
        [ForeignKey("User")]
        [Required]
        public int FKUserRequest { get; set; }

        [ForeignKey("GeneralAreas")]
        [Required]
        public int FKnumberOperating { get; set; }

        [ForeignKey("storedMedicine")]
        [Required]
        public int FkMedicineOne { get; set; }

        [ForeignKey("storedMedicine")]
        public int FkMedicineTwo { get; set; }

        [ForeignKey("storedMedicine")]
        public int FkMedicineThree { get; set; }

        [Key]
        public int idRequest { get; set; }

        [Required]
        public int amountRequired { get; set; }

        public int amountRequiredTwo { get; set; }

        public int amountRequiredThree { get; set; }

        [Required]
        public int orderNumber { get; set; }
    }
}
