using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MediTrazAppFinal.Migrations
{
    public partial class AgregarModelos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "charge",
                columns: table => new
                {
                    idCharge = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nameCharge = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    workArea = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_charge", x => x.idCharge);
                });

            migrationBuilder.CreateTable(
                name: "generalAreas",
                columns: table => new
                {
                    idGeneralArea = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ubicationArea = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    wareHouse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    commentWareHouse = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_generalAreas", x => x.idGeneralArea);
                });

            migrationBuilder.CreateTable(
                name: "orderpMediciness",
                columns: table => new
                {
                    idRequest = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FKUserRequest = table.Column<int>(type: "int", nullable: false),
                    FKnumberOperating = table.Column<int>(type: "int", nullable: false),
                    FkMedicineOne = table.Column<int>(type: "int", nullable: false),
                    FkMedicineTwo = table.Column<int>(type: "int", nullable: false),
                    FkMedicineThree = table.Column<int>(type: "int", nullable: false),
                    amountRequired = table.Column<int>(type: "int", nullable: false),
                    amountRequiredTwo = table.Column<int>(type: "int", nullable: false),
                    amountRequiredThree = table.Column<int>(type: "int", nullable: false),
                    orderNumber = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_orderpMediciness", x => x.idRequest);
                });

            migrationBuilder.CreateTable(
                name: "storedMedicines",
                columns: table => new
                {
                    idStoredMedicines = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    idAreaMedic = table.Column<int>(type: "int", nullable: false),
                    codeMedicine = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    tradename = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    expirationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    temperature = table.Column<int>(type: "int", nullable: false),
                    lot = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    laboratoryManufacturer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    medicineEntryAmount = table.Column<int>(type: "int", nullable: false),
                    medicineEntryDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    specificationMedic = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_storedMedicines", x => x.idStoredMedicines);
                });

            migrationBuilder.CreateTable(
                name: "transpEquiments",
                columns: table => new
                {
                    idTranspEquip = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    idEquipStorageArea = table.Column<int>(type: "int", nullable: false),
                    codeEquip = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nameTranspEquip = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    available = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_transpEquiments", x => x.idTranspEquip);
                });

            migrationBuilder.CreateTable(
                name: "user",
                columns: table => new
                {
                    idUser = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    idChargeUse = table.Column<int>(type: "int", nullable: false),
                    username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    lastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cellPhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    birthdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    identificationCard = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cardId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PasswordHash = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    PasswordSalt = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user", x => x.idUser);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "charge");

            migrationBuilder.DropTable(
                name: "generalAreas");

            migrationBuilder.DropTable(
                name: "orderpMediciness");

            migrationBuilder.DropTable(
                name: "storedMedicines");

            migrationBuilder.DropTable(
                name: "transpEquiments");

            migrationBuilder.DropTable(
                name: "user");
        }
    }
}
