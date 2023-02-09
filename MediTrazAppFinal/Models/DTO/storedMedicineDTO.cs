using System;

namespace MediTrazAppFinal.Models.DTO
{
    public class storedMedicineDTO
    {
   
        public int idAreaMedic { get; set; }

     
        public int idStoredMedicines { get; set; }

    
        public string codeMedicine { get; set; }

     
        public string tradename { get; set; }

        
        public DateTime expirationDate { get; set; }


        public int temperature { get; set; }

   
        public string lot { get; set; }

 
        public string laboratoryManufacturer { get; set; }

      
        public int medicineEntryAmount { get; set; }

        public DateTime medicineEntryDate { get; set; }

        public string specificationMedic { get; set; }
    }
}
