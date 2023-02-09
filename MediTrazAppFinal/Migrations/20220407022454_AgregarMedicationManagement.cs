using Microsoft.EntityFrameworkCore.Migrations;

namespace MediTrazAppFinal.Migrations
{
    public partial class AgregarMedicationManagement : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "medicicationManagements",
                columns: table => new
                {
                    idMedicationManag = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    idOrder = table.Column<int>(type: "int", nullable: false),
                    idPersonaWhoDelivers = table.Column<int>(type: "int", nullable: false),
                    idPersonWhoTransports = table.Column<int>(type: "int", nullable: false),
                    idPersonWhoWillReceive = table.Column<int>(type: "int", nullable: false),
                    idExitArea = table.Column<int>(type: "int", nullable: false),
                    idReceptionArea = table.Column<int>(type: "int", nullable: false),
                    idTransportationMedications = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_medicicationManagements", x => x.idMedicationManag);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "medicicationManagements");
        }
    }
}
