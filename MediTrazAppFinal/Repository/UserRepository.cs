using AutoMapper;
using MediTrazAppFinal.Data;
using MediTrazAppFinal.Models;
using MediTrazAppFinal.Models.DTO;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;

namespace MediTrazAppFinal.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDBContext _db;
        private IMapper _mapper;
        private readonly IConfiguration _configuration;

        public UserRepository(ApplicationDBContext db, IMapper mapper, IConfiguration configuration)
        {
            _db = db;
            _mapper = mapper;
            _configuration = configuration;
        }

        public async Task<List<UserDTO>> GetUsersRegisters()
        {
            List<User> lista = await _db.user.ToListAsync();
            return _mapper.Map<List<UserDTO>>(lista);
        }

        public async Task<List<Charge>> GetCharges()
        {
            List<Charge> lista = await _db.charge.ToListAsync();
            return _mapper.Map<List<Charge>>(lista);
        }

        public async Task<string> Login(string nameuser, string password)
        {
            //metodo de registro 
            var user = await _db.user.FirstOrDefaultAsync(x => x.username.ToLower().Equals(nameuser));   //AÑADIR CONDICIONAL DE NO IGNORAR


            if (user == null)
            {

                return "noUser";
            }
            else if (!VerifyPassword(password, user.PasswordHash, user.PasswordSalt))
            {
                return "Wrong Password";
            }
            else
            {

                return CreateToken(user);
            }

        }

        public async Task<UserDTO> getDataLoggin(string nameuser)
        {
            var user = await _db.user.FirstOrDefaultAsync(x => x.username.ToLower().Equals(nameuser));
            return _mapper.Map<UserDTO>(user);
        }


        public async Task<string> Register(User usuario, string password)
        {
            try
            {
                if (await UserExist(usuario.username))
                {
                    return "existe";

                }

                CreatePasswordHash(password, out byte[] passwordhash, out byte[] passwordsalt);

                usuario.PasswordHash = passwordhash;
                usuario.PasswordSalt = passwordsalt;

                await _db.user.AddAsync(usuario);
                await _db.SaveChangesAsync();
                return CreateToken(usuario);

            }
            catch (Exception)
            {

                return "error";
            }


        }

        public async Task<bool> UserExist(string username)
        {
            if (await _db.user.AnyAsync(x => x.username.ToLower().Equals(username.ToLower())))
            {
                return true;
            }
            return false;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            //debe implementarse en la task de registro

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        //Seccion Logion
        public bool VerifyPassword(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }


        private string CreateToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.idUser.ToString()),
                new Claim(ClaimTypes.Name, user.username)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.
                GetBytes(_configuration.GetSection("AppSettings:Token").Value));  //Codificar nuestro codigo 

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature); //protocolo de seguridad 512 transformacion de la key

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims), //llamar al sujeto de la base de datos que se logea
                Expires = System.DateTime.Now.AddDays(1), //asignar el tiempo que va a durar el token 
                SigningCredentials = creds // UnU
            };

            var tokenHandler = new JwtSecurityTokenHandler(); //LLAMO  A LA CLASE JWT PARA USAR SUS METODOS
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
