import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LogginUserService } from '../loggin-user.service';
import { MedicineService } from '../medicine.service';
import { TransEquipmentService } from '../trans-equipment.service';

@Component({
  selector: 'app-nurse-entrega-medicina',
  templateUrl: './nurse-entrega-medicina.component.html',
  styleUrls: ['./nurse-entrega-medicina.component.css']
})
export class NurseEntregaMedicinaComponent implements OnInit {

  dataSourceMedicines: pedidos[] = [];

  dataSourcePedidos: pedidos[]=[];  //pedido que se va a mostrar

  dataSourceUsuarios: UserI[] = []; //todos los usuarios registrados

  dataSourceEquipos: equipos[] = []; //todos los equipos

  dataSourceOrdenes: OrderMedicines[] = []; //todas las ordenes 

  dataSourceMedics: medicinas[] = []; //todos los medicamentos

  nombreCom1:string = '';
  nombreCom2:string = '';
  nombreCom3:string = '';

  lab1:string = '';
  lab2:string = '';
  lab3:string = '';




  constructor(private router: Router,
    private service: MedicineService,
    private serviceUser: LogginUserService,
    private serviceTrans: TransEquipmentService,
    private tilte:Title) { }

  

  ngOnInit(): void {

    this.tilte.setTitle('MeditrazApp');
    this.service.obtenerPedidos().subscribe((data:any) =>{
      this.dataSourceMedicines = (data.result as pedidos[]);   

      for (let index = 0; index < this.dataSourceMedicines.length; index++) {
          if(this.dataSourceMedicines[index].idOrder = Number(localStorage.getItem('idOrden'))){
            this.dataSourcePedidos.push(this.dataSourceMedicines[index]);
          }
      }

    });

    this.serviceUser.getUsers().subscribe((data:any)=>{
      this.dataSourceUsuarios = (data.result as UserI[]);
    });

    this.serviceTrans.getEquips().subscribe((data:any) =>{
      this.dataSourceEquipos = (data.result as equipos[]);
      
    });

    this.service.getOrderInfo().subscribe((data:any) =>{
      this.dataSourceOrdenes = (data.result as OrderMedicines[]);
      
    });

    this.service.getMedicines().subscribe((data:any)=>{
      this.dataSourceMedics = (data.result as medicinas[]);

      for (let i = 0; i < this.dataSourceMedics.length; i++) {

        if(this.dataSourceMedics[i].idStoredMedicines == Number(localStorage.getItem('medicina1'))){
          
          this.nombreCom1 = this.dataSourceMedics[i].tradename;
          this.lab1 = this.dataSourceMedics[i].laboratoryManufacturer;
        }
  
        if(this.dataSourceMedics[i].idStoredMedicines == Number(localStorage.getItem('medicina2'))){
          this.nombreCom2 = this.dataSourceMedics[i].tradename;
          this.lab2 = this.dataSourceMedics[i].laboratoryManufacturer;
        }
  
        if(this.dataSourceMedics[i].idStoredMedicines == Number(localStorage.getItem('medicina3'))){
          this.nombreCom3 = this.dataSourceMedics[i].tradename;
          this.lab3 = this.dataSourceMedics[i].laboratoryManufacturer;
        }
        
      }

    })




  }

  return(){
    this.router.navigate(['indexLogged']);
  }

  cantidades1(){

    
    return (this.dataSourceOrdenes.find(x=>x.idRequest === this.dataSourcePedidos[0].idOrder)?.amountRequired);
  }

  cantidades2(){
    return (this.dataSourceOrdenes.find(x=>x.idRequest === this.dataSourcePedidos[0].idOrder)?.amountRequiredTwo);
  }

  cantidades3(){
    return (this.dataSourceOrdenes.find(x=>x.idRequest === this.dataSourcePedidos[0].idOrder)?.amountRequiredThree);
  }

  nombreComercial1(){
    return this.nombreCom1;
  }

  nombreComercial2(){
    return this.nombreCom2;
  }

  nombreComercial3(){
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

  quienEntrega(){
    return (this.dataSourceUsuarios.find(x=>x.idUser === Number(this.dataSourcePedidos[0].idPersonaWhoDelivers))?.name +' '+this.dataSourceUsuarios.find(x=>x.idUser === Number(this.dataSourcePedidos[0].idPersonaWhoDelivers))?.lastName);
  }

  quienTransporta(){
    return (this.dataSourceUsuarios.find(x=>x.idUser === this.dataSourcePedidos[0].idPersonWhoTransports)?.name +' '+this.dataSourceUsuarios.find(x=>x.idUser === this.dataSourcePedidos[0].idPersonWhoTransports)?.lastName);
  }

  quienRecibe(){
    return (this.dataSourceUsuarios.find(x=>x.idUser === this.dataSourcePedidos[0].idPersonWhoWillReceive)?.name +' '+this.dataSourceUsuarios.find(x=>x.idUser === this.dataSourcePedidos[0].idPersonWhoWillReceive)?.lastName);
  }

  area(){
    return 'Quirofano/'+localStorage.getItem('bodega');
  }

  transporte(){
    return (this.dataSourceEquipos.find(x=>x.idTranspEquip === this.dataSourcePedidos[0].idTransportationMedications)?.nameTranspEquip);
  }

  entregarMedicina(){
    alert("El producto ha sido entregado con éxito, por favor, envía los equipos de transporte de medicamentos.");
    this.router.navigate(['indexLogged']);
  }

}

class pedidos{
  idOrder:Number;
  idPersonaWhoDelivers:Number;
  idPersonWhoTransports:Number;
  idPersonWhoWillReceive:Number;
  idExitArea:Number;
  idReceptionArea:Number;
  idTransportationMedications:Number;
  idMedicationManag:Number;

  constructor(idOrder:Number,idPersonaWhoDelivers:Number,idPersonWhoTransports:Number,idPersonWhoWillReceive:Number,idExitArea:Number,idReceptionArea:Number,idTransportationMedications:Number,idMedicationManag:Number) {
    this.idOrder = idOrder;
    this.idPersonaWhoDelivers = idPersonaWhoDelivers;
    this.idPersonWhoTransports = idPersonWhoTransports;
    this.idPersonWhoWillReceive = idPersonWhoWillReceive;
    this.idExitArea = idExitArea;
    this.idReceptionArea = idReceptionArea;
    this.idTransportationMedications = idTransportationMedications;
    this.idMedicationManag = idMedicationManag;
    
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



