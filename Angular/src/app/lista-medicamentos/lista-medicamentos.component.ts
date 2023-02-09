import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { medicineInterface } from '../Interfaces/medicineInterface';
import { LogginUserService } from '../loggin-user.service';
import { MedicineService } from '../medicine.service';

declare var navegar2:any;

@Component({
  selector: 'app-lista-medicamentos',
  templateUrl: './lista-medicamentos.component.html',
  styleUrls: ['./lista-medicamentos.component.css']
})
export class ListaMedicamentosComponent implements OnInit {

  dataSource: any= [];
  columnsToDisplay = ['codeMedicine','tradename','expirationDate','temperature','lot','laboratoryManufacturer','medicineEntryAmount','medicineEntryDate', 'idAreaMedic', 'specificationMedic' ];

  ngAfterViewInit(){  
    navegar2();
  }

  constructor(public service: MedicineService,
              private router:Router) { }

  ngOnInit(): void { 
    this.service.getMedicines().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<medicineInterface>(data.result as medicineInterface[]);
    });

  }

  listaMedicamentos(){
    var charge  = localStorage.getItem('idChargeUse');

    if(charge == '6'){
      alert("Acceso denegado - Jefe Enfermeria");
    }else{
      this.router.navigate(['/listaMedicamentos']);
    }

  }  
  perfil(){
    this.router.navigate(['perfilUsuario']);
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

  inicio(){
    this.router.navigate(['indexLogged']);
  }

}
