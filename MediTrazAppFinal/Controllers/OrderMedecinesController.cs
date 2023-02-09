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

    public class OrderMedecinesController : ControllerBase
    {
        private readonly IOrderMedecinesRepositorio _ordermedicine;
        protected ResponseDto _response;

        public OrderMedecinesController(IOrderMedecinesRepositorio context)
        {
            _ordermedicine = context;
            _response = new ResponseDto();
        }

        [Authorize]
        [HttpPost("CrearNuevaOrden")]
        public async Task<ActionResult> CreateRequest(OrderMedecines request)
        {
            if (await _ordermedicine.verifyMount(request.FkMedicineOne, request.FkMedicineTwo, request.FkMedicineThree, request.amountRequired, request.amountRequiredTwo, request.amountRequiredThree))
            {
                Random r = new Random();
                int y = r.Next(1000, 9999);
                

                if (await _ordermedicine.verifyOrderNumber(y))
                {
                    request.orderNumber = y; //se debe manejar un listado de ordenes de solicitudes mejorado

                    var respuesta = await _ordermedicine.CreateOrderMedecines(request);

                    if (respuesta == -200)
                    {

                        var res = await _ordermedicine.UpdateAmount(request.amountRequired, request.amountRequiredTwo, request.amountRequiredThree, request.FkMedicineOne, request.FkMedicineTwo, request.FkMedicineThree);

                        if (res.Equals("Error Inesperado"))
                        {
                            _response.IsSuccess = false;
                            _response.DisplayMessage = "Error critico inesperado. La base de datos no ha podido actualizar";
                            return BadRequest(_response);
                        }

                      
                        _response.IsSuccess = true;
                        _response.DisplayMessage = "Orden Creada con éxito";
                     

                        return Ok(_response);
                    }

                    if (respuesta == -500)
                    {
                        _response.IsSuccess = false;
                        _response.DisplayMessage = "Error al Registrar";
                        return BadRequest(_response);
                    }
                }
                else
                {
                    _response.DisplayMessage = "La orden ya fue emitida.";
                    return BadRequest(_response);
                }
            }

            _response.DisplayMessage = "No hay suficiente cantidad de alguno de los medicamentos solicitados. ";
            return BadRequest(_response);

        }

        [Authorize]
        [HttpGet("ObtenerOrdenes")]
        public async Task<ActionResult<IEnumerable<OrderMedecines>>> GetOrders()
        {
            try
            {
                var lista = await _ordermedicine.GetOrderMedecines();
                _response.Result = lista;
                _response.DisplayMessage = "Lista de Ordenes";
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }
            return Ok(_response);
        }

        [Authorize]
        [HttpGet("ObtenerOrden/{id}")]
        public async Task<ActionResult<IEnumerable<OrderMedecines>>> GetOrdenById(int id)
        {
            try
            {
                var order = await _ordermedicine.GetOrderMedecinesById(id);
                _response.Result = order;
                _response.DisplayMessage = "Orden Solicitada";
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }
            return Ok(_response);
        }

        [Authorize]
        [HttpDelete("BorrarOrden/{id}")]
        public async Task<ActionResult> DeleteOrden(int id)
        {
            try
            {
                bool eliminado = await _ordermedicine.DeleteOrden(id);
                if (eliminado)
                {
                    _response.Result = eliminado;
                    _response.DisplayMessage = "Orden Finalizada";
                    return Ok(_response);
                }
                else
                {
                    _response.IsSuccess = false;
                    _response.DisplayMessage = "Error al finalizar la orden";
                    return BadRequest(_response);
                }
            }
            catch (Exception e)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { e.ToString() };
                return BadRequest(_response);
            }
        }

    }

    
}
