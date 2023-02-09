using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MediTrazAppFinal.Data;
using MediTrazAppFinal.Models;
using MediTrazAppFinal.Repository;
using MediTrazAppFinal.Models.DTO;
using Microsoft.AspNetCore.Authorization;

namespace MediTrazAppFinal.Controllers
{
    [Route("api/[controller]")] //Dirección Web
    [ApiController] //Definición de que la hoja es un controlador
    public class storedMedicinesController : ControllerBase // : -> Hereda una clase que tiene por defecto .Net = ControllerBase
    {
        //Variablles que no estan instanciadas (Variables Fantasma)
        private readonly ApplicationDBContext _db; // Base de datos
        private readonly IstoredMedicines _storedMedicines; // Interfaz de Medicamentos
        protected ResponseDto _response; // Respuestas HTTP

        public storedMedicinesController(IstoredMedicines context, ApplicationDBContext db) // public -> Constructores
        {
            _storedMedicines = context; // Se instancia para que no sean varibles fantasmas, el constructor hace que las variables queden cargadas de info
            _db = db;
            _response = new ResponseDto();
        }

        [Authorize]
        [HttpGet("ObtenerMedicinas")]
        public async Task<ActionResult<IEnumerable<storedMedicine>>> GetMedicines()
        {
            try
            {
                var lista = await _storedMedicines.GetAllMedicines();
                _response.Result = lista;
                _response.DisplayMessage = "Lista de Medicamentos Registrados";
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }
            return Ok(_response);
        }

        [Authorize]
        [HttpGet("ObtenerMedicinaUnitaria/{id}")]
        public async Task<ActionResult<IEnumerable<storedMedicine>>> GetMedicinaUnit(int id)
        {
            try
            {
                var medicina = await _storedMedicines.GetMedicineById(id);
                _response.Result = medicina;
                _response.DisplayMessage = "Medicamento Obtenido";
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }
            return Ok(_response);
        }

       [Authorize]
        [HttpPost("RegistrarMedicamentos")]
        public async Task<ActionResult> Register(storedMedicine medicine)
        {
            medicine.medicineEntryDate = DateTime.Today;
            var respuesta = await _storedMedicines.RegisterMedicines(medicine);

            if (respuesta == -1)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "El codigo de barras ya existe";
                return BadRequest(_response);
            }

            if (respuesta == -500)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al cargar los medicamentos";
                return BadRequest(_response);
            }

            _response.DisplayMessage = "Medicamento Registrado con exito";
            _response.Result = respuesta;

            return Ok(_response);

        }

        [Authorize]
        [HttpPut("ActualizarRegistro")]
        public async Task<IActionResult> PutMedicines(int idHTTPNeed, string codeMed, string tradenamed, DateTime expiration, int temperatures, string lots, string laboratoryManufact, int medicineEntry, DateTime medicineEntryDates, string comments)
        {
            var update = _db.storedMedicines.Where(x => x.idStoredMedicines == idHTTPNeed).FirstOrDefault();

            update.codeMedicine = codeMed;
            update.tradename = tradenamed;
            update.lot = lots;
            update.expirationDate = expiration;
            update.temperature = temperatures;
            update.laboratoryManufacturer = laboratoryManufact;
            update.medicineEntryAmount = medicineEntry;
            update.medicineEntryDate = medicineEntryDates;
            update.specificationMedic = comments;

            var respuesta = await _storedMedicines.ActualizarMedicinas(update);

            if (respuesta == 200)
            {
                _response.DisplayMessage = "Medicamento Actualizado con exito";
                return Ok(_response);
            }
            _response.IsSuccess = false;
            _response.DisplayMessage = "Error al actualizar el medicamento";
            return BadRequest(_response);
        }
    }
}
