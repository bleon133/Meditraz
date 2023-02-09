import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare var navegar: any;

@Component({
  selector: 'app-request-medications',
  templateUrl: './request-medications.component.html',
  styleUrls: ['./request-medications.component.css']
})
export class RequestMedicationsComponent implements OnInit {

  dataSource: medicinas[] = [];
  requestMedicine: FormGroup
  
  ngAfterViewInit(){
    navegar(); 
  }

  constructor(public service: MedicineService,
              private router: Router,
              private title:Title,
              private fb:FormBuilder) {
                this.requestMedicine = this.fb.group({
                  FKUserRequest: [localStorage.getItem("idUsuario")],//
                  FKnumberOperating: [Number, Validators.required],//
                  FkMedicineOne: [Number, Validators.required], //
                  FkMedicineTwo: [0, Validators.required],
                  FkMedicineThree: [0, Validators.required],
                  amountRequired: [Number, Validators.required],//
                  amountRequiredTwo: [0, Validators.required],//
                  amountRequiredThree: [0, Validators.required]
                })
               }

  ngOnInit(): void {

      this.title.setTitle('MeditrazApp');
    this.service.getMedicines().subscribe((data:any) =>{
        
        
          this.dataSource = (data.result as medicinas[]);
          

          
    });

  }

  onSubmit() {

    this.service.requestMedicine(this.requestMedicine.value).subscribe((data: any) =>{
      alert(data.displayMessage);
      this.router.navigate(['/indexLogged']);
    },
    (errorData) => alert(errorData.error.displayMessage));

    
  }

  inicio(){
    this.router.navigate(['indexLogged']);
  }

  perfil(){
    this.router.navigate(['perfilUsuario']);
  }


  enfermeraNombre(){
    return localStorage.getItem('nombre');
  }

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




}

class medicinas{

    idAreaMedic: Number;
    idStoredMedicines: Number; 
    codeMedicine: string;
    tradename: string;
    expirationDate: Date;
    temperature: Number;
    lot: string;
    laboratoryManufacturer: string;
    medicineEntryAmount: Number;
    medicineEntryDate: Date;
    specificationMedic: string;
    

    constructor(idAreaMedic: Number, idStoredMedicines: Number, codeMedicine: string,tradename: string, expirationDate: Date, temperature: Number,lot: string,laboratoryManufacturer: string, medicineEntryAmount: Number, medicineEntryDate: Date,   specificationMedic: string) {
      this.idAreaMedic = idAreaMedic;
      this.idStoredMedicines = idStoredMedicines;
      this.codeMedicine = codeMedicine;
      this.tradename = tradename;
      this.expirationDate = expirationDate;
      this.temperature = temperature;
      this.lot = lot;
      this.laboratoryManufacturer = laboratoryManufacturer;
      this.medicineEntryAmount = medicineEntryAmount;
      this.medicineEntryDate = medicineEntryDate;
      this.specificationMedic = specificationMedic;
    }
}
