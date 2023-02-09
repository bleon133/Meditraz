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

    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        protected ResponseDto _response;

        public UsersController(IUserRepository context)
        {
            _userRepository = context;
            _response = new ResponseDto();
        }

        // GET: api/Users


        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> Getuser()
        {
            try
            {
                var lista = await _userRepository.GetUsersRegisters();
                _response.Result = lista;
                _response.DisplayMessage = "Lista de Usuarios";
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }
            return Ok(_response);
        }

       // [Authorize]
        [HttpGet("getCargos")]
        public async Task<ActionResult<IEnumerable<Charge>>> GetCargos()
        {
            try
            {
                var lista = await _userRepository.GetCharges();
                _response.Result = lista;
                _response.DisplayMessage = "Lista de cargos";
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }
            return Ok(_response);
        }

        [HttpPost("Registrar")]
        public async Task<ActionResult> Register(User user)
        {

            var respuesta = await _userRepository.Register(user, user.password);

            if (respuesta == "existe")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Usuario ya Existe";
                return BadRequest(_response);
            }

            if (respuesta == "error")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al crear un Usuario";
                return BadRequest(_response);
            }

            _response.DisplayMessage = "Usuario Creado";
            // _response.Result = respuesta;

            responseDataRegister data = new responseDataRegister();
            data.Token = respuesta;
            data.username = user.username;
            data.idCargo = user.idChargeUse;
            data.idUsuario = user.idUser;
            data.nombreUsuario = user.name;
            _response.Result = data;
            return Ok(_response);



        }

        [HttpPost("LoginUsuarios")]
        public async Task<ActionResult> Login(User user)
        {
            var respuesta = await _userRepository.Login(user.username, user.password);

            if (respuesta == "noUser")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Usuario no Existe";
                return BadRequest(_response);
            }

            if (respuesta == "Wrong Password")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Contraseña Incorrecta";
                return BadRequest(_response);
            }

            var idcharge = await _userRepository.getDataLoggin(user.username);
            responseDataRegister data = new responseDataRegister();
            data.username = user.username;
            data.Token = respuesta;
            data.idCargo = idcharge.idChargeUse;
            data.idUsuario = idcharge.idUser;
            data.nombreUsuario = idcharge.name;
            data.apellidos = idcharge.lastName;
            _response.Result = data;
            _response.DisplayMessage = "Usuario Conectado";
            return Ok(_response);
        }
    }

    public class responseDataRegister
    {

        public string Token { get; set; }
        public string username { get; set; }
        public string apellidos { get; set; }
        public int idCargo { get; set; }
        public int idUsuario { get; set; }
        public string nombreUsuario { get; set; }

    }
}
