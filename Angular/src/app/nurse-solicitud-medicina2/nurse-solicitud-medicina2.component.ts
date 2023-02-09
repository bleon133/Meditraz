import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-nurse-solicitud-medicina2',
  templateUrl: './nurse-solicitud-medicina2.component.html',
  styleUrls: ['./nurse-solicitud-medicina2.component.css']
})
export class NurseSolicitudMedicina2Component implements OnInit {
  resumenMedicina: FormGroup

  dataSource: OrderMedicines = new OrderMedicines(0,0,0,0,0,0,0,0,0,0);

  dataSourceMedicines: medicinas[] = [];

  cantidad1:Number = 0;
  cantidad2:Number = 0;
  cantidad3:Number = 0;
  
  nombreCom1:string = '';
  nombreCom2:string = '';
  nombreCom3:string = '';

  lab1:string = '';
  lab2:string = '';
  lab3:string = '';

  constructor(private router: Router,
              private service: MedicineService,
              private fb: FormBuilder){
              
              this.resumenMedicina = this.fb.group({
                nameEnfermera: [localStorage.getItem('nombreEnfermera')],
                zona: ['Quirofano'],
                numeroQuirofano: [localStorage.getItem('bodega')]
                
             });}



  ngOnInit(): void {
    this.service.getOrderById(Number(localStorage.getItem('idOrden'))).subscribe((data:any) =>{
      this.dataSource = (data.result as OrderMedicines);   
    });

    this.service.getMedicines().subscribe((data:any) =>{
      this.dataSourceMedicines = (data.result as medicinas[]); 
       for (let i = 0; i < this.dataSourceMedicines.length; i++) {

      if(this.dataSourceMedicines[i].idStoredMedicines == Number(localStorage.getItem('medicina1'))){
        
        this.nombreCom1 = this.dataSourceMedicines[i].tradename;
        this.lab1 = this.dataSourceMedicines[i].laboratoryManufacturer;
      }

      if(this.dataSourceMedicines[i].idStoredMedicines == Number(localStorage.getItem('medicina2'))){
        this.nombreCom2 = this.dataSourceMedicines[i].tradename;
        this.lab2 = this.dataSourceMedicines[i].laboratoryManufacturer;
      }

      if(this.dataSourceMedicines[i].idStoredMedicines == Number(localStorage.getItem('medicina3'))){
        this.nombreCom3 = this.dataSourceMedicines[i].tradename;
        this.lab3 = this.dataSourceMedicines[i].laboratoryManufacturer;
      }
      
    }
    });

   

  }

  cantidades1(){
    this.cantidad1 = this.dataSource.amountRequired;
    return this.cantidad1;
  }

  cantidades2(){
    this.cantidad2 = this.dataSource.amountRequiredTwo;
    return this.cantidad2;
  }

  cantidades3(){
    this.cantidad3 = this.dataSource.amountRequiredThree;
    return this.cantidad3;
  }

  nameComercial1(){
    
    return this.nombreCom1;
  }

  nameComercial2(){
    return this.nombreCom2;
  }

  nameComercial3(){
    return this.nombreCom3;
  }

  labo1(){
    return this.lab1;
  }

  labo2(){
    return this.lab2;
  }

  labo3(){
    return this.lab3;
  }

  regresarLista(){
    localStorage.removeItem('medicina1');
    localStorage.removeItem('medicina2');
    localStorage.removeItem('medicina3');
    localStorage.removeItem('bodega');
    localStorage.removeItem('idOrden');
    localStorage.removeItem('nombreEnfermera')
    this.router.navigate(['indexLogged']);
  }

}

class OrderMedicines{
  FKUserRequest:Number;
  FKnumberOperating:Number;
  FkMedicineOne:Number;
  FkMedicineTwo:Number;
  FkMedicineThree:Number;
  idRequest:Number;
  amountRequired:Number;
  amountRequiredTwo:Number;
  amountRequiredThree:Number;
  orderNumber:Number;


  constructor(FKUserRequest:Number,  FKnumberOperating:Number,FkMedicineOne:Number,  FkMedicineTwo:Number, FkMedicineThree:Number,idRequest:Number,amountRequired:Number,amountRequiredTwo:Number,amountRequiredThree:Number, orderNumber:Number) {
    this.FKUserRequest = FKUserRequest;
    this.FKnumberOperating = FKnumberOperating;
    this.FkMedicineOne = FkMedicineOne;
    this.FkMedicineTwo = FkMedicineTwo;
    this.FkMedicineThree = FkMedicineThree;
    this.idRequest = idRequest;
    this.amountRequired = amountRequired;
    this.amountRequiredTwo = amountRequiredTwo;
    this.amountRequiredThree = amountRequiredThree;
    this.orderNumber = orderNumber;
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


