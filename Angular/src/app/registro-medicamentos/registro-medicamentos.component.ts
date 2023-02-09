import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var navegar2: any;

@Component({
  selector: 'app-registro-medicamentos',
  templateUrl: './registro-medicamentos.component.html',
  styleUrls: ['./registro-medicamentos.component.css']
})
export class RegistroMedicamentosComponent implements OnInit {

  medicineForm: FormGroup

  ngAfterViewInit(){
    navegar2(); 
  }

  constructor(public service: MedicineService,
              private router: Router, 
              private fb:FormBuilder) {

                this.medicineForm = this.fb.group({
                  idAreaMedic: [Number, Validators.required], //
                  codeMedicine: ['', Validators.required],
                  tradename: ['', Validators.required], //
                  expirationDate: [Date, Validators.required], //
                  temperature: [Number, Validators.required], //
                  lot: ['', Validators.required], //
                  laboratoryManufacturer: ['', Validators.required], //
                  medicineEntryAmount: [Number, Validators.required],
                  medicineEntryDate: [Date.now, Validators.required],
                  specificationMedic: ['', Validators.required]//
                  
                })
               }

  ngOnInit(): void {
    console.log(JSON.stringify(Date.now));
    
  }

  onSubmit() {

    this.service.registerMedicine(this.medicineForm.value).subscribe((data: any) =>{
      alert(data.displayMessage);
      this.router.navigate(['/indexLogged']);
    },
    (errorData) => alert("Usuario No Autorizado token"));

    
  }
  perfil(){
    this.router.navigate(['perfilUsuario']);
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

  inicio(){
    this.router.navigate(['indexLogged']);
  }

}
