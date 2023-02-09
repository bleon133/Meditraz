import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LogginUserService } from '../loggin-user.service';


declare var navbar : any;


@Component({
  selector: 'app-index-logged',
  templateUrl: './index-logged.component.html',
  styleUrls: ['./index-logged.component.css']
}) 
export class IndexLoggedComponent implements OnInit{

  

  ngAfterViewInit(){
    navbar();
  }

  ngOnInit(): void {
    this.title.setTitle("MeditrazApp");
  }

  constructor(public service: LogginUserService,
              private router: Router,
              private title:Title) { }

  listaMedicamentos(){
    var charge  = localStorage.getItem('idChargeUse');

    if(charge == '6'){
      alert("Acceso denegado - Jefe Enfermeria");
    }else{
      this.router.navigate(['/listaMedicamentos']);
    }

  }  


  registrarTransporte(){

    var charge  = localStorage.getItem('idChargeUse');

    if(charge == "1" || charge == "3" || charge == "7" ){
      this.router.navigate(['/registroEquipoTransporte']);
      
    }else{
      alert("Acceso denegado - Solo Técnico Farmacéutico Registrador - Central de Mezclas ó Técnico Farmacéutico Registrador - Farmacia ó Químico Farmacéutico - Central de Mezclas");
    }
  }  


  listaEquipos(){ 

    var charge  = localStorage.getItem('idChargeUse');

    if(charge == '6'){
      alert("Acceso denegado - Jefe Enfermeria");
    }else{
      this.router.navigate(['/listaEquipos']);
    }

   
  } 

  registroMedicinas(){

    var charge  = localStorage.getItem('idChargeUse');

    if(charge == "1" || charge == "3" || charge == "7" ){
      this.router.navigate(['/registroMedicinas']);
      
    }else{
      alert("Acceso denegado - Solo Técnico Farmacéutico Registrador - Central de Mezclas ó Técnico Farmacéutico Registrador - Farmacia ó Químico Farmacéutico - Central de Mezclas");
    }
   
  }

  solicitarMedicamento(){

    var charge  = localStorage.getItem('idChargeUse');

    if(charge == "6"){
      this.router.navigate(['/solicitarMedicina']);
      
    }else{
      alert("Acceso denegado - Solo jefes de enfermería pueden solicitar medicamentos");
    }
  }

  solicitudes(){
    var charge = localStorage.getItem('idChargeUse');

    if(charge == "6"){
      this.router.navigate(['/nurseSolicitudesMedicinas']);

    }else if(charge == "1"|| charge == "2"|| charge=="3"|| charge=="4"||charge=="7"){
      this.router.navigate(['tecnicoSolicitudMedicina'])
    }

    //programar los demás casos
  }

  gestionMedicina(){
    var charge = localStorage.getItem('idChargeUse');

    if(charge == "6"){
      this.router.navigate(['/nurseGestionarMedicina']);

    }else if(charge == "1"|| charge == "2"|| charge=="3"|| charge=="4"||charge=="7"){
      this.router.navigate(['tecnicoGestionMedicamento'])
    }

    //programar los demás casos
  }

  medicinaCamino(){
    var charge = localStorage.getItem('idChargeUse');

    if(charge == "6" || charge == "1" || charge =="3"|| charge =="7"|| charge =="2"|| charge =="4"){
    
      
      this.router.navigate(['/nurseMedicinaCamino']);

    }

    //programar los demás casos
  }

  entregarMedicina(){
    var charge = localStorage.getItem('idChargeUse');

    if(charge == "6" || charge == "1" || charge =="3"|| charge =="7"|| charge =="2"|| charge =="4"){
    
      
      this.router.navigate(['tecnicoEntregaMedicina']);

    }
   
  }

  regresarEquipos(){
    var charge = localStorage.getItem('idChargeUse');

    if(charge == "6" || charge == "1" || charge =="3"|| charge =="7"|| charge =="2"|| charge =="4"){
    
      
      this.router.navigate(['entregaEquiposLista']);

    }
   
  }

  perfil(){
    this.router.navigate(['perfilUsuario']);
  }


}
