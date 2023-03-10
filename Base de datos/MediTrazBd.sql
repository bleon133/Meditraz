USE [master]
GO
/****** Object:  Database [MediTrazApp]    Script Date: 26/12/2022 7:01:44 a. m. ******/
CREATE DATABASE [MediTrazApp]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MediTrazApp', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\MediTrazApp.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MediTrazApp_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\MediTrazApp_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [MediTrazApp] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MediTrazApp].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MediTrazApp] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MediTrazApp] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MediTrazApp] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MediTrazApp] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MediTrazApp] SET ARITHABORT OFF 
GO
ALTER DATABASE [MediTrazApp] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MediTrazApp] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MediTrazApp] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MediTrazApp] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MediTrazApp] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MediTrazApp] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MediTrazApp] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MediTrazApp] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MediTrazApp] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MediTrazApp] SET  ENABLE_BROKER 
GO
ALTER DATABASE [MediTrazApp] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MediTrazApp] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MediTrazApp] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MediTrazApp] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MediTrazApp] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MediTrazApp] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [MediTrazApp] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MediTrazApp] SET RECOVERY FULL 
GO
ALTER DATABASE [MediTrazApp] SET  MULTI_USER 
GO
ALTER DATABASE [MediTrazApp] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MediTrazApp] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MediTrazApp] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MediTrazApp] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MediTrazApp] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [MediTrazApp] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'MediTrazApp', N'ON'
GO
ALTER DATABASE [MediTrazApp] SET QUERY_STORE = OFF
GO
USE [MediTrazApp]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 26/12/2022 7:01:44 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[charge]    Script Date: 26/12/2022 7:01:44 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[charge](
	[idCharge] [int] IDENTITY(1,1) NOT NULL,
	[nameCharge] [nvarchar](max) NOT NULL,
	[workArea] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_charge] PRIMARY KEY CLUSTERED 
(
	[idCharge] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[generalAreas]    Script Date: 26/12/2022 7:01:44 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[generalAreas](
	[idGeneralArea] [int] IDENTITY(1,1) NOT NULL,
	[ubicationArea] [nvarchar](max) NOT NULL,
	[wareHouse] [nvarchar](max) NOT NULL,
	[commentWareHouse] [nvarchar](max) NULL,
 CONSTRAINT [PK_generalAreas] PRIMARY KEY CLUSTERED 
(
	[idGeneralArea] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[medicicationManagements]    Script Date: 26/12/2022 7:01:44 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[medicicationManagements](
	[idMedicationManag] [int] IDENTITY(1,1) NOT NULL,
	[idOrder] [int] NOT NULL,
	[idPersonaWhoDelivers] [int] NOT NULL,
	[idPersonWhoTransports] [int] NOT NULL,
	[idPersonWhoWillReceive] [int] NOT NULL,
	[idExitArea] [int] NOT NULL,
	[idReceptionArea] [int] NOT NULL,
	[idTransportationMedications] [int] NOT NULL,
 CONSTRAINT [PK_medicicationManagements] PRIMARY KEY CLUSTERED 
(
	[idMedicationManag] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orderpMediciness]    Script Date: 26/12/2022 7:01:44 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orderpMediciness](
	[idRequest] [int] IDENTITY(1,1) NOT NULL,
	[FKUserRequest] [int] NOT NULL,
	[FKnumberOperating] [int] NOT NULL,
	[FkMedicineOne] [int] NOT NULL,
	[FkMedicineTwo] [int] NOT NULL,
	[FkMedicineThree] [int] NOT NULL,
	[amountRequired] [int] NOT NULL,
	[amountRequiredTwo] [int] NOT NULL,
	[amountRequiredThree] [int] NOT NULL,
	[orderNumber] [int] NOT NULL,
 CONSTRAINT [PK_orderpMediciness] PRIMARY KEY CLUSTERED 
(
	[idRequest] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[storedMedicines]    Script Date: 26/12/2022 7:01:44 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[storedMedicines](
	[idStoredMedicines] [int] IDENTITY(1,1) NOT NULL,
	[idAreaMedic] [int] NOT NULL,
	[codeMedicine] [nvarchar](max) NOT NULL,
	[tradename] [nvarchar](max) NOT NULL,
	[expirationDate] [datetime2](7) NOT NULL,
	[temperature] [int] NOT NULL,
	[lot] [nvarchar](max) NOT NULL,
	[laboratoryManufacturer] [nvarchar](max) NOT NULL,
	[medicineEntryAmount] [int] NOT NULL,
	[medicineEntryDate] [datetime2](7) NOT NULL,
	[specificationMedic] [nvarchar](max) NULL,
 CONSTRAINT [PK_storedMedicines] PRIMARY KEY CLUSTERED 
(
	[idStoredMedicines] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[transpEquiments]    Script Date: 26/12/2022 7:01:44 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[transpEquiments](
	[idTranspEquip] [int] IDENTITY(1,1) NOT NULL,
	[idEquipStorageArea] [int] NOT NULL,
	[codeEquip] [nvarchar](max) NOT NULL,
	[nameTranspEquip] [nvarchar](max) NOT NULL,
	[available] [bit] NOT NULL,
 CONSTRAINT [PK_transpEquiments] PRIMARY KEY CLUSTERED 
(
	[idTranspEquip] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user]    Script Date: 26/12/2022 7:01:44 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[idUser] [int] IDENTITY(1,1) NOT NULL,
	[idChargeUse] [int] NOT NULL,
	[username] [nvarchar](max) NOT NULL,
	[password] [nvarchar](max) NOT NULL,
	[name] [nvarchar](max) NOT NULL,
	[lastName] [nvarchar](max) NOT NULL,
	[email] [nvarchar](max) NOT NULL,
	[cellPhone] [nvarchar](max) NOT NULL,
	[birthdate] [datetime2](7) NOT NULL,
	[identificationCard] [nvarchar](max) NOT NULL,
	[cardId] [nvarchar](max) NOT NULL,
	[gender] [nvarchar](max) NOT NULL,
	[PasswordHash] [varbinary](max) NULL,
	[PasswordSalt] [varbinary](max) NULL,
 CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED 
(
	[idUser] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20220404031209_AgregarModelos', N'5.0.13')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20220407022454_AgregarMedicationManagement', N'5.0.13')
GO
SET IDENTITY_INSERT [dbo].[charge] ON 

INSERT [dbo].[charge] ([idCharge], [nameCharge], [workArea]) VALUES (1, N'Técnico Farmacéutico Registrador - Central de Mezclas', N'Central de Mezclas')
INSERT [dbo].[charge] ([idCharge], [nameCharge], [workArea]) VALUES (2, N'Técnico Farmacéutico Despacho - Central de Mezclas', N'Central de Mezclas')
INSERT [dbo].[charge] ([idCharge], [nameCharge], [workArea]) VALUES (3, N'Técnico Farmacéutico Registrador - Farmacia', N'Farmacia')
INSERT [dbo].[charge] ([idCharge], [nameCharge], [workArea]) VALUES (4, N'Técnico Farmacéutico Despacho - Farmacia', N'Farmacia')
INSERT [dbo].[charge] ([idCharge], [nameCharge], [workArea]) VALUES (5, N'Gerente - Gerencia', N'Gerencia')
INSERT [dbo].[charge] ([idCharge], [nameCharge], [workArea]) VALUES (6, N'Jefe de Enfermería', N'Servicio de Cirugía')
INSERT [dbo].[charge] ([idCharge], [nameCharge], [workArea]) VALUES (7, N'Químico Farmacéutico - Central de Mezclas', N'Central de Mezcla')
SET IDENTITY_INSERT [dbo].[charge] OFF
GO
SET IDENTITY_INSERT [dbo].[generalAreas] ON 

INSERT [dbo].[generalAreas] ([idGeneralArea], [ubicationArea], [wareHouse], [commentWareHouse]) VALUES (1, N'Farmacia', N'1', N'Nevera 1: Refrigeración, Nevera 2: Refrigeración')
INSERT [dbo].[generalAreas] ([idGeneralArea], [ubicationArea], [wareHouse], [commentWareHouse]) VALUES (2, N'Farmacia', N'2', N'Nevera 1: Congelación, Nevera 2: Congelación')
INSERT [dbo].[generalAreas] ([idGeneralArea], [ubicationArea], [wareHouse], [commentWareHouse]) VALUES (3, N'Central de Mezclas', N'1', N'Nevera 1: Refrigeración, Nevera 2: Refrigeración')
INSERT [dbo].[generalAreas] ([idGeneralArea], [ubicationArea], [wareHouse], [commentWareHouse]) VALUES (4, N'Central de Mezclas', N'2', N'Nevera 1: Congelación, Nevera 2: Congelación')
INSERT [dbo].[generalAreas] ([idGeneralArea], [ubicationArea], [wareHouse], [commentWareHouse]) VALUES (6, N'Almacen Equipos', N'1', NULL)
INSERT [dbo].[generalAreas] ([idGeneralArea], [ubicationArea], [wareHouse], [commentWareHouse]) VALUES (7, N'Almacen Equipos', N'2', NULL)
INSERT [dbo].[generalAreas] ([idGeneralArea], [ubicationArea], [wareHouse], [commentWareHouse]) VALUES (8, N'Quirófano', N'1', N'Servicio cirugía oftalmológica')
INSERT [dbo].[generalAreas] ([idGeneralArea], [ubicationArea], [wareHouse], [commentWareHouse]) VALUES (9, N'Quirófano', N'2', N'Servicio cirugía oftalmológica')
SET IDENTITY_INSERT [dbo].[generalAreas] OFF
GO
SET IDENTITY_INSERT [dbo].[medicicationManagements] ON 

INSERT [dbo].[medicicationManagements] ([idMedicationManag], [idOrder], [idPersonaWhoDelivers], [idPersonWhoTransports], [idPersonWhoWillReceive], [idExitArea], [idReceptionArea], [idTransportationMedications]) VALUES (1, 2, 1, 1, 2, 3, 6, 1)
INSERT [dbo].[medicicationManagements] ([idMedicationManag], [idOrder], [idPersonaWhoDelivers], [idPersonWhoTransports], [idPersonWhoWillReceive], [idExitArea], [idReceptionArea], [idTransportationMedications]) VALUES (2, 3, 3, 1, 2, 3, 7, 1)
INSERT [dbo].[medicicationManagements] ([idMedicationManag], [idOrder], [idPersonaWhoDelivers], [idPersonWhoTransports], [idPersonWhoWillReceive], [idExitArea], [idReceptionArea], [idTransportationMedications]) VALUES (3, 4, 3, 4, 2, 4, 9, 2)
INSERT [dbo].[medicicationManagements] ([idMedicationManag], [idOrder], [idPersonaWhoDelivers], [idPersonWhoTransports], [idPersonWhoWillReceive], [idExitArea], [idReceptionArea], [idTransportationMedications]) VALUES (4, 5, 10, 11, 9, 3, 3, 14)
INSERT [dbo].[medicicationManagements] ([idMedicationManag], [idOrder], [idPersonaWhoDelivers], [idPersonWhoTransports], [idPersonWhoWillReceive], [idExitArea], [idReceptionArea], [idTransportationMedications]) VALUES (5, 3, 10, 0, 9, 0, 9, 0)
INSERT [dbo].[medicicationManagements] ([idMedicationManag], [idOrder], [idPersonaWhoDelivers], [idPersonWhoTransports], [idPersonWhoWillReceive], [idExitArea], [idReceptionArea], [idTransportationMedications]) VALUES (6, 6, 1, 0, 7, 1, 1, 1)
INSERT [dbo].[medicicationManagements] ([idMedicationManag], [idOrder], [idPersonaWhoDelivers], [idPersonWhoTransports], [idPersonWhoWillReceive], [idExitArea], [idReceptionArea], [idTransportationMedications]) VALUES (7, 7, 1, 0, 7, 1, 1, 11)
INSERT [dbo].[medicicationManagements] ([idMedicationManag], [idOrder], [idPersonaWhoDelivers], [idPersonWhoTransports], [idPersonWhoWillReceive], [idExitArea], [idReceptionArea], [idTransportationMedications]) VALUES (8, 8, 1, 0, 7, 1, 1, 11)
INSERT [dbo].[medicicationManagements] ([idMedicationManag], [idOrder], [idPersonaWhoDelivers], [idPersonWhoTransports], [idPersonWhoWillReceive], [idExitArea], [idReceptionArea], [idTransportationMedications]) VALUES (9, 9, 11, 5, 7, 1, 1, 11)
INSERT [dbo].[medicicationManagements] ([idMedicationManag], [idOrder], [idPersonaWhoDelivers], [idPersonWhoTransports], [idPersonWhoWillReceive], [idExitArea], [idReceptionArea], [idTransportationMedications]) VALUES (10, 10, 1, 5, 7, 1, 1, 11)
INSERT [dbo].[medicicationManagements] ([idMedicationManag], [idOrder], [idPersonaWhoDelivers], [idPersonWhoTransports], [idPersonWhoWillReceive], [idExitArea], [idReceptionArea], [idTransportationMedications]) VALUES (11, 11, 1, 5, 7, 1, 2, 15)
SET IDENTITY_INSERT [dbo].[medicicationManagements] OFF
GO
SET IDENTITY_INSERT [dbo].[storedMedicines] ON 

INSERT [dbo].[storedMedicines] ([idStoredMedicines], [idAreaMedic], [codeMedicine], [tradename], [expirationDate], [temperature], [lot], [laboratoryManufacturer], [medicineEntryAmount], [medicineEntryDate], [specificationMedic]) VALUES (1, 3, N'7703363006926', N'Furoato de Fluticasona', CAST(N'2024-10-01T00:00:00.0000000' AS DateTime2), 30, N'4D6C', N'Avamys', 94, CAST(N'2022-04-06T18:40:10.0000000' AS DateTime2), N'No congelar, ni refrigerar')
INSERT [dbo].[storedMedicines] ([idStoredMedicines], [idAreaMedic], [codeMedicine], [tradename], [expirationDate], [temperature], [lot], [laboratoryManufacturer], [medicineEntryAmount], [medicineEntryDate], [specificationMedic]) VALUES (2, 4, N'7703363006926', N'Fluticasone Furoate', CAST(N'2023-10-01T00:00:00.0000000' AS DateTime2), 30, N'6F8E', N'Avamys', 196, CAST(N'2022-04-06T18:04:43.0000000' AS DateTime2), N'No refrigerar')
INSERT [dbo].[storedMedicines] ([idStoredMedicines], [idAreaMedic], [codeMedicine], [tradename], [expirationDate], [temperature], [lot], [laboratoryManufacturer], [medicineEntryAmount], [medicineEntryDate], [specificationMedic]) VALUES (3, 1, N'7703363006928', N'Acetaminofen', CAST(N'2023-10-02T00:00:00.0000000' AS DateTime2), 28, N'4J6D', N'MK', 138, CAST(N'2022-04-06T19:25:43.0000000' AS DateTime2), N'No refrigerar')
INSERT [dbo].[storedMedicines] ([idStoredMedicines], [idAreaMedic], [codeMedicine], [tradename], [expirationDate], [temperature], [lot], [laboratoryManufacturer], [medicineEntryAmount], [medicineEntryDate], [specificationMedic]) VALUES (4, 2, N'7703186031525', N'Glucerna', CAST(N'2022-06-01T00:00:00.0000000' AS DateTime2), 25, N'26661RN0', N'Abbot', 96, CAST(N'2022-04-06T21:01:00.0000000' AS DateTime2), N'Almacene a temperatura ambiente')
INSERT [dbo].[storedMedicines] ([idStoredMedicines], [idAreaMedic], [codeMedicine], [tradename], [expirationDate], [temperature], [lot], [laboratoryManufacturer], [medicineEntryAmount], [medicineEntryDate], [specificationMedic]) VALUES (6, 2, N'7703153008147', N'Lagri fresh', CAST(N'2023-08-01T00:00:00.0000000' AS DateTime2), 30, N'1357710', N'Pharmayect S.A.', 985, CAST(N'2022-04-06T21:51:59.0000000' AS DateTime2), N'No mayor a 30°c - Solamente para uso oftálmico ')
INSERT [dbo].[storedMedicines] ([idStoredMedicines], [idAreaMedic], [codeMedicine], [tradename], [expirationDate], [temperature], [lot], [laboratoryManufacturer], [medicineEntryAmount], [medicineEntryDate], [specificationMedic]) VALUES (7, 2, N'7707274913137', N'Cocoa butter', CAST(N'2024-08-01T00:00:00.0000000' AS DateTime2), 30, N'2106001', N'DROGAM SAS.', 595, CAST(N'2022-04-06T10:17:00.0000000' AS DateTime2), N'Mantener a 30°c - Almacenar en lugar seco - Solo aplicar en los labios - cantidad 5g')
INSERT [dbo].[storedMedicines] ([idStoredMedicines], [idAreaMedic], [codeMedicine], [tradename], [expirationDate], [temperature], [lot], [laboratoryManufacturer], [medicineEntryAmount], [medicineEntryDate], [specificationMedic]) VALUES (8, 4, N'7707188188690', N'Valeriana', CAST(N'2024-12-05T00:00:00.0000000' AS DateTime2), 30, N'24', N'Pfreezer', 120, CAST(N'2022-04-08T11:00:00.0000000' AS DateTime2), N'Estándar')
INSERT [dbo].[storedMedicines] ([idStoredMedicines], [idAreaMedic], [codeMedicine], [tradename], [expirationDate], [temperature], [lot], [laboratoryManufacturer], [medicineEntryAmount], [medicineEntryDate], [specificationMedic]) VALUES (9, 2, N'7703363006926', N'ANTIACIDO', CAST(N'2024-08-04T00:00:00.0000000' AS DateTime2), 30, N'4K85', N'Mylanta', 178, CAST(N'2022-04-09T00:00:00.0000000' AS DateTime2), N'No refrigerar')
INSERT [dbo].[storedMedicines] ([idStoredMedicines], [idAreaMedic], [codeMedicine], [tradename], [expirationDate], [temperature], [lot], [laboratoryManufacturer], [medicineEntryAmount], [medicineEntryDate], [specificationMedic]) VALUES (10, 2, N'7703363145268', N'Acetaminofen', CAST(N'2022-05-26T00:00:00.0000000' AS DateTime2), 36, N'NJRN', N'Bayer Corporation', 150, CAST(N'2022-05-05T00:00:00.0000000' AS DateTime2), N'Almacenar en lugar oscuro')
INSERT [dbo].[storedMedicines] ([idStoredMedicines], [idAreaMedic], [codeMedicine], [tradename], [expirationDate], [temperature], [lot], [laboratoryManufacturer], [medicineEntryAmount], [medicineEntryDate], [specificationMedic]) VALUES (11, 1, N'7703388585757', N'Loratadina', CAST(N'2030-01-25T00:00:00.0000000' AS DateTime2), 29, N'gh5345', N'Genfar', 29, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'No congelar')
INSERT [dbo].[storedMedicines] ([idStoredMedicines], [idAreaMedic], [codeMedicine], [tradename], [expirationDate], [temperature], [lot], [laboratoryManufacturer], [medicineEntryAmount], [medicineEntryDate], [specificationMedic]) VALUES (12, 2, N'7703365757586', N'Desloratadina', CAST(N'2030-06-21T00:00:00.0000000' AS DateTime2), 20, N'L23194', N'AG', 1, CAST(N'2022-05-05T00:00:00.0000000' AS DateTime2), N'PRUEBA')
INSERT [dbo].[storedMedicines] ([idStoredMedicines], [idAreaMedic], [codeMedicine], [tradename], [expirationDate], [temperature], [lot], [laboratoryManufacturer], [medicineEntryAmount], [medicineEntryDate], [specificationMedic]) VALUES (13, 2, N'8333363145268', N'Ibuprofeno', CAST(N'2030-07-20T00:00:00.0000000' AS DateTime2), 28, N'L6783', N' MK', 46, CAST(N'2022-05-10T00:00:00.0000000' AS DateTime2), N'NO CONGELAR')
INSERT [dbo].[storedMedicines] ([idStoredMedicines], [idAreaMedic], [codeMedicine], [tradename], [expirationDate], [temperature], [lot], [laboratoryManufacturer], [medicineEntryAmount], [medicineEntryDate], [specificationMedic]) VALUES (14, 1, N'7702057079130', N'Trimebutina LP', CAST(N'2022-11-01T00:00:00.0000000' AS DateTime2), 30, N'0R3992A', N'MK', 40, CAST(N'2022-05-12T00:00:00.0000000' AS DateTime2), N'Ninguna')
SET IDENTITY_INSERT [dbo].[storedMedicines] OFF
GO
SET IDENTITY_INSERT [dbo].[transpEquiments] ON 

INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (1, 6, N'1415', N'Cava', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (2, 6, N'1998', N'Cava electrónica ', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (3, 6, N'1999', N'Cava electrónica ', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (4, 6, N'2002', N'Cava icopor', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (5, 6, N'2001', N'Cava', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (6, 6, N'1259', N'cava', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (7, 6, N'1111', N'cava', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (8, 6, N'15663', N'Cava', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (9, 6, N'15645', N'Cava', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (10, 7, N'2596', N'Cava', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (11, 6, N'7893', N'Cava Eléctrico ', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (12, 6, N'1548', N'Cava Icopor', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (13, 7, N'8736', N'Cava Electrónica ', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (14, 7, N'1685', N'Cava', 1)
INSERT [dbo].[transpEquiments] ([idTranspEquip], [idEquipStorageArea], [codeEquip], [nameTranspEquip], [available]) VALUES (15, 6, N'9658', N'Cava Eléctrica ', 1)
SET IDENTITY_INSERT [dbo].[transpEquiments] OFF
GO
SET IDENTITY_INSERT [dbo].[user] ON 

INSERT [dbo].[user] ([idUser], [idChargeUse], [username], [password], [name], [lastName], [email], [cellPhone], [birthdate], [identificationCard], [cardId], [gender], [PasswordHash], [PasswordSalt]) VALUES (1, 3, N'bleon133', N'32080562', N'Brayan Steven', N'León Martinez', N'bleon133@unab.edu.co', N'3059999264', CAST(N'2002-04-08T23:25:43.0000000' AS DateTime2), N'155637448', N'U00141286', N'Masculino', 0x379FDBC7F37ED77EB426C22DC7B9CDA86EF1A5AC3BC06D4BAE7A674C3733A080EBDB341B04D81BC305F5E3C9871E0AE43A93AA6B314A5420FEF0D7ACD9C1C39E, 0xEB6C494BFEE3E9B0DA112648642CDC97D5591EFE5EB8F7D5A59B924147F7441B8D7A42BCF859F51052B8F42727D02FAA220AF8A15B738685BE79B51AB251A8D4F8E52E69A46C361855B8095C10B26264EEA37D9137B79ACAA4957303DED86087B728DA9523ABC73EBABCE8449A5043FE525FEC38BB14E2E535657D7019258BF0)
INSERT [dbo].[user] ([idUser], [idChargeUse], [username], [password], [name], [lastName], [email], [cellPhone], [birthdate], [identificationCard], [cardId], [gender], [PasswordHash], [PasswordSalt]) VALUES (2, 6, N'patricita', N'123456', N'Patricia ', N'Vidal', N'pvidal115@unab.edu.co', N'3162270499', CAST(N'1999-04-27T00:00:00.0000000' AS DateTime2), N'766191', N'U00141672', N'Otro', 0xF0FE311A6C82A16C5D4C1EA638411EB7B694F9E64750A1718FFC22DECC6B531844105E662B5B0A839B5D156AF5184395477CE73A219DC6E4E4AE8ADC6E8B9E34, 0xD5DC0988005E7C8F6A9923751D54CFCA2B8C1E24D9FF966D6EEB4A3948BF204B349A8552D0FF25424053C1B6657C574375B2D4E6D9B0CCF002072CF61F2C8375E713950A18CC0A337E0BC8186B01AF44AA063E094F166683E42CFFCAB599007B421A779AC9C45150D1C6237F72B1B4B0CB16BD0F7C824A9B729E6873F6DDFE68)
INSERT [dbo].[user] ([idUser], [idChargeUse], [username], [password], [name], [lastName], [email], [cellPhone], [birthdate], [identificationCard], [cardId], [gender], [PasswordHash], [PasswordSalt]) VALUES (3, 7, N'ssanchez475', N'123456', N'santiago', N'sanchez bahamon', N'ssanchez495@unab.edu.co', N'3146705171', CAST(N'1998-12-01T00:00:00.0000000' AS DateTime2), N'1110584921', N'U00132157', N'Hombre', 0xF8C5DC955EBC8FC8D83C7D086CA9119C83EC438584BF3C02B782C992F904B410324189D32CC2C33F42DC3991A126FCF6873E03A50E4A2D86239CE6DCB13530B7, 0x6EB0DEFF9D808CD78931BB58E391E71244F91B0112E6DED12D1558C43A26EB42218AA96D97033376303FAC2BB6A5E9185F20221333A035C209E2B01017610A4737BFA9CBFC3C8106BC9913DCC1DACA725A4ECBE26DF96267E8491518AD46713E693577A32D3EEFA11DA8F223C4DB044528C4C11C5D26D322951ADFD62FA952CB)
INSERT [dbo].[user] ([idUser], [idChargeUse], [username], [password], [name], [lastName], [email], [cellPhone], [birthdate], [identificationCard], [cardId], [gender], [PasswordHash], [PasswordSalt]) VALUES (4, 3, N'cmoncada', N'digitales_202210', N'Camilo', N'Moncada', N'cmoncada@unab.edu.co', N'3254567894', CAST(N'2022-10-23T00:00:00.0000000' AS DateTime2), N'5485214', N'100041774', N'Masculino', 0xB97C043633579913AD1040DBB182C97B7408E602063ACFBE545FD201746D593C1DF20B9CFF89801B24C7DE4188B06E921226B8ADAF82125F02D3EE1E14F3064B, 0x96D6FA0286100466B3B1B03D2E70AAD52EE47EE50E502B1062A7CBA1F91496DFD9F09DA523C2E9A17E972597DD88E52310ABB233CA335D58763D18EED212A27E1E569E2608BFB4A18288DB674637C86C78F2E4160B15CC1038082E6A41128CE1B137F7B30CE60E5F9A8B572B609ADD8EA63440056089DAD8858F217AECFB7AF4)
INSERT [dbo].[user] ([idUser], [idChargeUse], [username], [password], [name], [lastName], [email], [cellPhone], [birthdate], [identificationCard], [cardId], [gender], [PasswordHash], [PasswordSalt]) VALUES (5, 4, N'fmendoza', N'123456', N'Federico', N'Mendoza', N'fmendoza@gmail.com', N'3023665977', CAST(N'1996-10-04T00:00:00.0000000' AS DateTime2), N'122142699', N'U00159628', N'Masculino', 0xBCBF3F366E8DB843958072AD80D005DF43A35AEB1B09D2104BA00FF9A71E7EFF459286B6ACAD62EB85BC3CA98003517A4AFAFBBAF302D23616268B4A7A0E1218, 0xEADB14E423442106ED9846F60B47FEDD62B3604114EAC1D35DE1C9E6C5C2CB5B571083E01A656BDBAA39F5CFCB1195DBD400541A4AF6384C88E0A5422D011D96958FF5FB7801E2F6F8D1B099DA6C4A92390B72CD9814850A4824C47BA04E672FC202454DA7BBA34FA629ED8B97D36DC389D7CC0B1F77A56DE906A4F02595D0D3)
INSERT [dbo].[user] ([idUser], [idChargeUse], [username], [password], [name], [lastName], [email], [cellPhone], [birthdate], [identificationCard], [cardId], [gender], [PasswordHash], [PasswordSalt]) VALUES (6, 1, N'lmendoza', N'123456', N'Luis', N'Mendoza', N'lmendoza@gmail.com', N'305664895', CAST(N'2000-05-16T00:00:00.0000000' AS DateTime2), N'1225698774', N'U00253689', N'Másculino', 0x2BB7A1EC6BC5F29F6098ED71F800F0F178299AB1E5D6B649D47DB2038C9336CA7C037C168613FAFE958A639194664483B2C33BA3A7D36ED30A1F8EF6B87C78BB, 0x80781AA3AC8CC60A14941BD0526E59A9D42676C8C4B45613A71A649E7AD355C99948252ADBF5B998CA6CE93ECF17634314CE8FD9C6CF2C73A8E96FEA8A025CC9C0D76D313030B836CA5F0142E2E67AFC4D870C621F8BE3AC164F25D58FCE4DB2147D6CEDD89B4CF0DA54A2F14AE88B03B20427D4EA2527C578ECE66C1F25F54A)
INSERT [dbo].[user] ([idUser], [idChargeUse], [username], [password], [name], [lastName], [email], [cellPhone], [birthdate], [identificationCard], [cardId], [gender], [PasswordHash], [PasswordSalt]) VALUES (7, 6, N'pvidal155', N'123', N'Patricia Daniela', N'Vidal Paredes', N'pvidal115@unab.edu.co', N'3012665488', CAST(N'1999-04-27T00:00:00.0000000' AS DateTime2), N'95847', N'U00153698', N'Female', 0xE278607009C1A21C0D75BC6F79B7C7F02BF82AF9755EB1971C2CE0343F0E79BB4C2D8B649DFE00597939DB8FA7CB836B9BE8EB354CAB466CDB937F90FCC9588F, 0x9ED5369311E7DEB921C0B85CFA6014EBB4557253E608A52069818A1E087A4206B47ADFAE56AFD83B6B08EB8E80FAFBAEF17B668DDE321A01D61EAC69DBD001FBA68366DEC79E675941AB29B6CFD45FBB7620B62065DA62875D721C97874EC5DF8959B4121CA92877A13D37065320D2756B07BB516A94B20538FBF4DA1BF3FDCB)
INSERT [dbo].[user] ([idUser], [idChargeUse], [username], [password], [name], [lastName], [email], [cellPhone], [birthdate], [identificationCard], [cardId], [gender], [PasswordHash], [PasswordSalt]) VALUES (8, 3, N'prueba123', N'123', N'prueba', N'prueba', N'prueba@prueba.com', N'203194', CAST(N'2001-06-21T00:00:00.0000000' AS DateTime2), N'931845', N'jf3421', N'Male', 0x0AB0CCCFB7281C3791A47409B0DB0FAB23AED4DD516032CDBBE0282933CCB9D93ADBC5CBFC4E3FE597744CA9E6D8D6948A37A27ACF4DB541806C0EE6D1FD761E, 0x8E6B4C973972BE9AB07F96113071F2D18C0DFF8740FD52A1320108547F2F8AFE815FAF60EB73363859A93041311E79D7B7BA835A413A038603E813BA2154B4593C2802E24D68219C40573F70FA7D08B8308A954937D4A904DC3BDA9FCFE5C8139A5168531F2C9223831749477C8ED9B3235B7D6C4D90C1C63DC16B3341B4F6AD)
INSERT [dbo].[user] ([idUser], [idChargeUse], [username], [password], [name], [lastName], [email], [cellPhone], [birthdate], [identificationCard], [cardId], [gender], [PasswordHash], [PasswordSalt]) VALUES (9, 6, N'enfermera', N'123', N'Mariana', N'Perez', N'enfermera@gmail.com', N'5678321', CAST(N'1997-07-20T00:00:00.0000000' AS DateTime2), N'4564321|', N'g23617', N'Female', 0x859D701780855D41EC69BABBA3229FDF5B51A9522EDBF5AAB80CB58BB994640F9BD8C3AB54447E31E2367150F7052229BDAD11D1C0C332C5C3B6A68AC9C07B8B, 0x77E6E7718C85585FCD86D733A6AC7177000182DE555BE527C14FE5E52987ACED8B68CBA059C6F97A167E00C8B6E407E98841AB12E3BBC4034AF57723F2F62925B24B8A5126BAA41D304B613D80E36C770F293A8F2376313922466758AEB639A667F108DF3DAE755C00C8A2DF21DE5E963B0B1814F1CC11B5CEE723438FEB284E)
INSERT [dbo].[user] ([idUser], [idChargeUse], [username], [password], [name], [lastName], [email], [cellPhone], [birthdate], [identificationCard], [cardId], [gender], [PasswordHash], [PasswordSalt]) VALUES (10, 1, N'tecnico', N'123', N'Brayan Steven', N'Martinez', N'bleon133@unab.edu.co', N'25673839124', CAST(N'1999-01-07T00:00:00.0000000' AS DateTime2), N'53212765', N'd213124dsfa', N'Male', 0xFC374EBA701CCC8FEB217F317C5BD61538D608301B475168EDBFEB61CA21FD0BC0078F1731E5488FB3EAF3F33116EF4237CCD990386297843C6DA5EB5AC70099, 0x95EF42AB803F9F514059DF3E1B677173A9454D27E1FBD61F7E8DFCA92170EC816969AD1706B6F0BC914C3246F4DEFF4450950AEA9D510BD947FFBD2C684C8D1C5EF822F272A8D7AAC5ABD4305CBE3B94405BDB8AD19346A7924F859273C3277C76B95FECC17130AC167F0723A48A64A9DDECB03719E0CFBE719910AD6885299B)
INSERT [dbo].[user] ([idUser], [idChargeUse], [username], [password], [name], [lastName], [email], [cellPhone], [birthdate], [identificationCard], [cardId], [gender], [PasswordHash], [PasswordSalt]) VALUES (11, 2, N'tecnico2', N'123', N'Patricia Daniela', N'Paredes', N'pvidal115@unab.edu.co', N'312758', CAST(N'2001-07-07T00:00:00.0000000' AS DateTime2), N'487653', N'U00153698', N'Female', 0x30960BB95F0620148D0F21C30EB9C939DBFE24AEA0C216A9C3ABD296B0C1AC0A9347616917F57383491286D47B816C8E12F0CD98AF00CCEFB3DD4A8AFF88CF25, 0x020E82C3E8F0FCA3CB9E7BB7421D5CE59AB257C5B381D7921630F794C4E9C169DB08D39C2A8A7CB18E6D5E1C0BF8C32F44F0D6A369650F9B65618D5B4AAA775E3FF56744F6AC36D718FDA1CFAB6712F2AE6B08E8BF66CA7B688059192C2DA9E3A2641B50E317F78C485FEB8C5FDD1D775101751831F79B410EA640264EA8E238)
INSERT [dbo].[user] ([idUser], [idChargeUse], [username], [password], [name], [lastName], [email], [cellPhone], [birthdate], [identificationCard], [cardId], [gender], [PasswordHash], [PasswordSalt]) VALUES (12, 6, N'laura', N'123', N'Laura', N'Lorena', N'laura@gmail.com', N'3042557899', CAST(N'1996-01-24T00:00:00.0000000' AS DateTime2), N'100410448', N'U00142536', N'Female', 0x7849DF03AFBF43878B7C9BE9375E059F8C0AE29ADF6CFE15AF9341A7AB4D58A93BBE34BDEFDE8CDF774563BFD4A683CE4A308379BC43E98DFB7F8F2FFD808F88, 0xC05257FEFA4D9B0100B27C5801EAD6F642DF55D2FBFBC625C82C615CE289B73C4B0F5A24DB6C1114995FCDE913BF19486F5DBCB9B18B935BF22F4E1CA3CD30D3D927711CCB29656F5F11281874522DC056CB106E14F18A32885A46823622B24B9AF2CFEBAD84FEC9E3665D546446B3A3B3AA69349BE299559F5594BA60B93FF3)
INSERT [dbo].[user] ([idUser], [idChargeUse], [username], [password], [name], [lastName], [email], [cellPhone], [birthdate], [identificationCard], [cardId], [gender], [PasswordHash], [PasswordSalt]) VALUES (13, 5, N'david29', N'123', N'David', N'Ortega', N'david@gmail.com', N'3025887499', CAST(N'1993-03-30T00:00:00.0000000' AS DateTime2), N'27458631', N'U00154789', N'Male', 0xCA1A62F1231E1CFD7E653C2DC88A9BEE695BBA4B5D0C6BE1F377845B5119D2646A407DF8004430D27A5F87B29D67E5DE1C83BE46F36E0FE19CBBE48A9EFFCB6D, 0x1EB76FAEBFC560966962C40FFE9D18F4D8D10B9969B481B00421BC28A44D70583C88FA5CB1B6481686F7103EEBA18A6CEF747A7B572BA056331A5985D0715E73F75710D7EAC652EAA9CD508C3A57D79DB93609E9DC5997446324BD70A2718B42BAF387977B0F23D75956429C2D291E1C513946ABC74B4DD7035D1E5EA3783BB2)
SET IDENTITY_INSERT [dbo].[user] OFF
GO
USE [master]
GO
ALTER DATABASE [MediTrazApp] SET  READ_WRITE 
GO
