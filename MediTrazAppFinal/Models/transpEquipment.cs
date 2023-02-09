using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MediTrazAppFinal.Models
{
    public class transpEquipment
    {

        [ForeignKey("GeneralAreas")]
        public int idEquipStorageArea { get; set; }

        [Key]
        public int idTranspEquip { get; set; }

        [Required]
        public string codeEquip { get; set; }

        [Required]
        public string nameTranspEquip { get; set; }

        [Required]
        public bool available { get; set; }


    }
}
