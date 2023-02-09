import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransEquipmentService } from '../trans-equipment.service';
import { LogginUserService } from '../loggin-user.service';




@Component({
  selector: 'app-tecnicos-gestion-medicamentos2',
  templateUrl: './tecnicos-gestion-medicamentos2.component.html',
  styleUrls: ['./tecnicos-gestion-medicamentos2.component.css']
})
export class TecnicosGestionMedicamentos2Component implements OnInit {


  dataSource: OrderMedicines = new OrderMedicines(0,0,0,0,0,0,0,0,0,0); 

  dataSourceMedicines: medicinas[] = [];

  dataSourceEquipos: equipos[]=[];

  dataSourceTecnicos: UserI[] = [];
  listaUsuariosTransporte: UserI[]= [];
  
  cantidad1:Number = 0;
  cantidad2:Number = 0;
  cantidad3:Number = 0;
  
  nombreCom1:string = '';
  nombreCom2:string = '';
  nombreCom3:string = '';
  labo1:string = '';
  labo2:string = '';
  labo3:string = '';

  gestionarPedido: FormGroup

  constructor(private router: Router,
    private service: MedicineService,
    private serviceTrans: TransEquipmentService,
    private serviceUser: LogginUserService,
    private fb:FormBuilder) {
      this.gestionarPedido = this.fb.group({

        idOrder: [Number(localStorage.getItem('idOrden'))], //
        idPersonaWhoDelivers: [Number(localStorage.getItem('idUsuario'))],//

        idPersonWhoTransports: [Number, Validators.required], //
        idPersonWhoWillReceive: [Number(localStorage.getItem('idEnfermera'))],//
        idExitArea: [Number, Validators.required], //
        idReceptionArea: [Number(localStorage.getItem('bodega'))],
        idTransportationMedications: [Number, Validators.required] //
      })
     }

  ngOnInit(): void {
    this.service.getOrderById(Number(localStorage.getItem('idOrden'))).subscribe((data:any) =>{
      this.dataSource = (data.result as OrderMedicines);   
    });

    this.service.getMedicines().subscribe((data:any) =>{
      this.dataSourceMedicines = (data.result as medicinas[]); 
       for (let i = 0; i < this.dataSourceMedicines.length; i++) {

      if(this.dataSourceMedicines[i].idStoredMedicines == Number(localStorage.getItem('medicina1'))){
        
        this.nombreCom1 = this.dataSourceMedicines[i].tradename;
        this.labo1 = this.dataSourceMedicines[i].laboratoryManufacturer;
       
      }

      if(this.dataSourceMedicines[i].idStoredMedicines == Number(localStorage.getItem('medicina2'))){
        this.nombreCom2 = this.dataSourceMedicines[i].tradename;
        this.labo2 = this.dataSourceMedicines[i].laboratoryManufacturer;

      }

      if(this.dataSourceMedicines[i].idStoredMedicines == Number(localStorage.getItem('medicina3'))){
        this.nombreCom3 = this.dataSourceMedicines[i].tradename;
        this.labo3 = this.dataSourceMedicines[i].laboratoryManufacturer;

      }
      
    }
   });

    this.serviceTrans.getEquips().subscribe((data:any) =>{
      this.dataSourceEquipos = (data.result as equipos[]);
      console.log(this.dataSourceEquipos);
      
    });

    


    this.serviceUser.getUsers().subscribe((data:any) =>{
      this.dataSourceTecnicos = (data.result as UserI[]);
        
      for (let index = 0; index < this.dataSourceTecnicos.length; index++) {
          if(this.dataSourceTecnicos[index].idChargeUse == '2'||this.dataSourceTecnicos[index].idChargeUse == '4'){
            this.listaUsuariosTransporte.push(this.dataSourceTecnicos[index]);
          } 
      }
    });


   

  }


  onSubmit() {

    this.service.administrarPedido(this.gestionarPedido.value).subscribe((data: any) =>{
      alert(data.displayMessage);
      this.router.navigate(['/indexLogged']);
    },
    (errorData) => alert(errorData.error.displayMessage));

    
  }

return (){
  this.router.navigate(['indexLogged']);
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
    
    return (this.nombreCom1 +'-'+this.labo1);
  }

  nameComercial2(){
    return (this.nombreCom2 +'-'+this.labo2);
  }

  nameComercial3(){
    return (this.nombreCom3 +'-'+this.labo3);
  }

  personaEntrega(){

    var name = localStorage.getItem('nombre');
    var apellido = localStorage.getItem('apellido');
    return (name +' '+ apellido);
  }

  areaRecepcion(){
    return ('Quirofano/' +''+localStorage.getItem('bodega'));
  }


  enfermeraNombre(){

  
    return localStorage.getItem('nombreEnfermera');
  }

  regresarLista(){
    localStorage.removeItem('medicina1');
    localStorage.removeItem('medicina2');
    localStorage.removeItem('medicina3');
    localStorage.removeItem('bodega');
    localStorage.removeItem('idOrden');
    localStorage.removeItem('nombreEnfermera');
    this.router.navigate(['/nurseSolicitudesMedicinas']);
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

class equipos{

    idEquipStorageArea:Number;
    idTranspEquip: Number;
    codeEquip: string;
    nameTranspEquip: string;
    available: boolean;

    constructor(idEquipStorageArea: Number, idTranspEquip:Number, codeEquip:string, nameTranspEquip: string, available: boolean) {
      this.idEquipStorageArea = idEquipStorageArea;
      this.idTranspEquip = idTranspEquip;
      this.codeEquip = codeEquip;
      this.nameTranspEquip = nameTranspEquip;
      this.available = available;

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
  cardID: string;
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
    this.cardID = cardID;
    this.gender = gender;
    this.rePassword = rePassword;

  }
  

}