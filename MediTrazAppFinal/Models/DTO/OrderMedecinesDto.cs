namespace MediTrazAppFinal.Models.DTO
{
    public class OrderMedecinesDto
    {
        public int FKUserRequest { get; set; }

        public int FKnumberOperating { get; set; }

        public int FkMedicineOne { get; set; }

        public int FkMedicineTwo { get; set; }

        public int FkMedicineThree { get; set; }

        public int idRequest { get; set; }

        public int amountRequired { get; set; }

        public int amountRequiredTwo { get; set; }

        public int amountRequiredThree { get; set; }

        public int orderNumber { get; set; }
    }
}
