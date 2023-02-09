using AutoMapper;
using MediTrazAppFinal.Models;
using MediTrazAppFinal.Models.DTO;
using System;

namespace MediTrazAppFinal
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<UserDTO, User>();
                config.CreateMap<User, UserDTO>();

                config.CreateMap<transpEquipmentDTO, transpEquipment>();
                config.CreateMap<transpEquipment, transpEquipmentDTO>();

                config.CreateMap<storedMedicineDTO, storedMedicine>();
                config.CreateMap<storedMedicine, storedMedicineDTO>();

                config.CreateMap<OrderMedecinesDto, OrderMedecines>();
                config.CreateMap<OrderMedecines, OrderMedecinesDto>();

                config.CreateMap<medicationManagementDTO, medicationManagement>();
                config.CreateMap<medicationManagement, medicationManagementDTO>();
            });

            return mappingConfig;
        }
    }
}
