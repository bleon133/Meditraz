﻿// <auto-generated />
using System;
using MediTrazAppFinal.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace MediTrazAppFinal.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    [Migration("20220404031209_AgregarModelos")]
    partial class AgregarModelos
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.13")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MediTrazAppFinal.Models.Charge", b =>
                {
                    b.Property<int>("idCharge")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("nameCharge")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("workArea")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("idCharge");

                    b.ToTable("charge");
                });

            modelBuilder.Entity("MediTrazAppFinal.Models.GeneralAreas", b =>
                {
                    b.Property<int>("idGeneralArea")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("commentWareHouse")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ubicationArea")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("wareHouse")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("idGeneralArea");

                    b.ToTable("generalAreas");
                });

            modelBuilder.Entity("MediTrazAppFinal.Models.OrderMedecines", b =>
                {
                    b.Property<int>("idRequest")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("FKUserRequest")
                        .HasColumnType("int");

                    b.Property<int>("FKnumberOperating")
                        .HasColumnType("int");

                    b.Property<int>("FkMedicineOne")
                        .HasColumnType("int");

                    b.Property<int>("FkMedicineThree")
                        .HasColumnType("int");

                    b.Property<int>("FkMedicineTwo")
                        .HasColumnType("int");

                    b.Property<int>("amountRequired")
                        .HasColumnType("int");

                    b.Property<int>("amountRequiredThree")
                        .HasColumnType("int");

                    b.Property<int>("amountRequiredTwo")
                        .HasColumnType("int");

                    b.Property<int>("orderNumber")
                        .HasColumnType("int");

                    b.HasKey("idRequest");

                    b.ToTable("orderpMediciness");
                });

            modelBuilder.Entity("MediTrazAppFinal.Models.User", b =>
                {
                    b.Property<int>("idUser")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("varbinary(max)");

                    b.Property<DateTime>("birthdate")
                        .HasColumnType("datetime2");

                    b.Property<string>("cardId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("cellPhone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("idChargeUse")
                        .HasColumnType("int");

                    b.Property<string>("identificationCard")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("idUser");

                    b.ToTable("user");
                });

            modelBuilder.Entity("MediTrazAppFinal.Models.storedMedicine", b =>
                {
                    b.Property<int>("idStoredMedicines")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("codeMedicine")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("expirationDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("idAreaMedic")
                        .HasColumnType("int");

                    b.Property<string>("laboratoryManufacturer")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lot")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("medicineEntryAmount")
                        .HasColumnType("int");

                    b.Property<DateTime>("medicineEntryDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("specificationMedic")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("temperature")
                        .HasColumnType("int");

                    b.Property<string>("tradename")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("idStoredMedicines");

                    b.ToTable("storedMedicines");
                });

            modelBuilder.Entity("MediTrazAppFinal.Models.transpEquipment", b =>
                {
                    b.Property<int>("idTranspEquip")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("available")
                        .HasColumnType("bit");

                    b.Property<string>("codeEquip")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("idEquipStorageArea")
                        .HasColumnType("int");

                    b.Property<string>("nameTranspEquip")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("idTranspEquip");

                    b.ToTable("transpEquiments");
                });
#pragma warning restore 612, 618
        }
    }
}
