using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MediTrazAppFinal.Models
{
    public class storedMedicine
    {
        [ForeignKey("GeneralAreas")]
        public int idAreaMedic { get; set; }

        [Key]
        public int idStoredMedicines { get; set; }

        [Required]
        public string codeMedicine { get; set; }

        [Required]
        public string tradename { get; set; }

        [Required]
        public DateTime expirationDate { get; set; }

        [Required]
        public int temperature { get; set; }

        [Required]
        public string lot { get; set; }

        [Required]
        public string laboratoryManufacturer { get; set; }

        [Required]
        public int medicineEntryAmount { get; set; }

        [Required]
        public DateTime medicineEntryDate { get; set; }

        public string specificationMedic { get; set; }
    }
}
