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
    [Route("api/[controller]")]
    [ApiController]
    public class transpEquipmentsController : ControllerBase
    {
        private readonly ItranspEquipment _transpEquipment;
        protected ResponseDto _response;

        public transpEquipmentsController(ItranspEquipment context)
        {
            _transpEquipment = context;
            _response = new ResponseDto();
        }


        // GET: api/Users
        [Authorize]
        [HttpGet("ObtenerEquipos")]
        public async Task<ActionResult<IEnumerable<transpEquipment>>> GetEquipt()
        {
            try
            {
                var lista = await _transpEquipment.GetAllEquipts();
                _response.Result = lista;
                _response.DisplayMessage = "Lista de Equipos Registrados";
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }
            return Ok(_response);
        }

        [Authorize]
        [HttpPost("RegistrarEquipo")]
        public async Task<ActionResult> Register(transpEquipment transporte)
        {

            var respuesta = await _transpEquipment.RegisterEquipments(transporte);

            if (respuesta == -1)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Equipo ya Registrado";
                return BadRequest(_response);
            }

            if (respuesta == -500)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al Registrar";
                return BadRequest(_response);
            }

            _response.DisplayMessage = "Equipo Registrado";
            _response.Result = respuesta;

            return Ok(_response);


        }
    }
}
