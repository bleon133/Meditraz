using MediTrazAppFinal.Models;
using MediTrazAppFinal.Models.DTO;
using MediTrazAppFinal.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MediTrazAppFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class medicationManagementController : ControllerBase
    {
        private readonly IMedicationManagement _context;
        protected ResponseDto _response;

        public medicationManagementController(IMedicationManagement context)
        {
            _context = context;
            _response = new ResponseDto();
        }



        [Authorize]
        [HttpPost("AdministrarPedido")]
        public async Task<ActionResult> ManagementMedication(medicationManagement order)
        {
            var respuesta = await _context.ManagementCreate(order);

            if (respuesta == -200)
            {
                _response.IsSuccess = true;
                _response.DisplayMessage = "El pedido ha sido administrado";
                return Ok(_response);
            }

            if (respuesta == -500)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error";
                return BadRequest(_response);
            }
            _response.DisplayMessage = "Error Inesperado";
            return BadRequest(_response);


        }


        [Authorize]
        [HttpGet("ObtenerPedidos")]
        public async Task<ActionResult<IEnumerable<medicationManagement>>> getManagements()
        {
            try
            {
                var lista = await _context.GetAllManagements();
                _response.Result = lista;
                _response.DisplayMessage = "Lista de pedidos";
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }
            return Ok(_response);
        }


        [Authorize]
        [HttpGet("ObtenerPedido/{id}")]
        public async Task<ActionResult<IEnumerable<medicationManagement>>> getManagementById(int id)
        {
            try
            {
                var order = await _context.GetManagementById(id);
                _response.Result = order;
                _response.DisplayMessage = "Solicitud realizada";
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }
            return Ok(_response);
        }
    }
}
