using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MediTrazAppFinal.Models
{
    public class medicationManagement
    {
        [ForeignKey("OrderMedecines")]
        public int idOrder { get; set; } 

        [ForeignKey("User")]
        public int idPersonaWhoDelivers { get; set; }

        [ForeignKey("User")]
        public int idPersonWhoTransports { get; set;}

        [ForeignKey("User")]
        public int idPersonWhoWillReceive { get; set; }

        [ForeignKey("GeneralAreas")]
        public int idExitArea { get; set; }

        [ForeignKey("GeneralAreas")]
        public int idReceptionArea { get; set; }    

        [ForeignKey("transpEquipment")]
        public int idTransportationMedications { get; set; }    

        [Key]
        public int idMedicationManag { get; set; }  
    }
}
