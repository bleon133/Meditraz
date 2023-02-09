import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LogginUserService } from '../loggin-user.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  dataSourceUsuarios: UserI[] = [];
  dataSourceCargos: cargos[]= [];
  nombre:any;
  apellido:any;
  nameUsuario:any;
  edad:any;
  correoElectronico: any;
  telefonoUsuario: any;
  cedulaUsuario:any;
  idUsuario:any;
  cargoUsuario: any;
  id:any;



  constructor(private router:Router,
    private title:Title,
    private serviceUser: LogginUserService) { }

  ngOnInit(): void {
    this.title.setTitle('MediTrazApp');

    this.serviceUser.getUsers().subscribe((data:any)=>{
      this.dataSourceUsuarios = (data.result as UserI[]);
    });

    this.serviceUser.getCargos().subscribe((data:any) =>{
      this.dataSourceCargos = (data.result as cargos[]);
    });

    
    

  }

  return(){
    this.router.navigate(['indexLogged']);
  }

  nombres(){
    this.nombre = this.dataSourceUsuarios.find(x=>x.idUser === Number(localStorage.getItem('idUsuario')))?.name;

    this.apellido = this.dataSourceUsuarios.find(x=>x.idUser === Number(localStorage.getItem('idUsuario')))?.lastName;

    return (this.nombre + ' '+ this.apellido);

  }

  usuario(){
    this.nameUsuario = this.dataSourceUsuarios.find(x=>x.idUser === Number(localStorage.getItem('idUsuario')))?.username;

    return ('Nombre de Usuario: '+this.nameUsuario);
  }

  edadu(){
    this.edad = this.dataSourceUsuarios.find(x=>x.idUser === Number(localStorage.getItem('idUsuario')))?.birthdate;
    return ('Fecha de Nacimiento: ' + this.edad);
  }

  correo(){
    this.correoElectronico = this.dataSourceUsuarios.find(x=>x.idUser === Number(localStorage.getItem('idUsuario')))?.email;
    return this.correoElectronico;
  }

  telefono(){
    this.telefonoUsuario = this.dataSourceUsuarios.find(x=>x.idUser === Number(localStorage.getItem('idUsuario')))?.cellPhone;
  
    
    return this.telefonoUsuario;
  }

  carnetNumero(){
    this.idUsuario = this.dataSourceUsuarios.find(x=>x.idUser === Number(localStorage.getItem('idUsuario')))?.cardId;

    
    
    return this.idUsuario;
  }

  cedula(){
    this.cedulaUsuario = this.dataSourceUsuarios.find(x=>x.idUser === Number(localStorage.getItem('idUsuario')))?.identificationCard;

    return (this.cedulaUsuario)
  }

  cargo(){
    this.id = this.dataSourceUsuarios.find(x=>x.idUser === Number(localStorage.getItem('idUsuario')))?.idChargeUse;

    this.cargoUsuario = this.dataSourceCargos.find(x=>x.idCharge === this.id)?.nameCharge;
    return (this.cargoUsuario);
  }


}


export class UserI{

  
  idChargeUse: string;
  idUser: Number;
  username: string;
  password: string;
  name: string;
  lastName: string;
  email: string;
  cellPhone: string;
  birthdate: DateConstructor;
  identificationCard: string;
  cardId: string;
  gender: string;
  rePassword: string;


  constructor(idChargeUse:string, idUser:Number, username:string, password:string, name:string, lastName: string, email:string, cellPhone:string, birthDate:DateConstructor, identificationCartd:string, cardID:string, gender:string, rePassword:string) {
    this.idChargeUse = idChargeUse;
    this.idUser = idUser;
    this.username = username;
    this.password = password;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.cellPhone = cellPhone;
    this.birthdate = birthDate;
    this.identificationCard = identificationCartd;
    this.cardId = cardID;
    this.gender = gender;
    this.rePassword = rePassword;

  }
  

}

export class cargos{
  idCharge: Number;
  nameCharge : string;
  workArea: string;

  constructor(idCharge:Number, nameCharge:string, workArea:string) {
    this.idCharge = idCharge;
    this.nameCharge = nameCharge;
    this.workArea = workArea;

  }

}