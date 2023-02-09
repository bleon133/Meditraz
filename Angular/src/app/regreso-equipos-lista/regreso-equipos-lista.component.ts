import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { MatTableDataSource } from '@angular/material/table';
import { request } from '../Interfaces/requestInterface';
import { LogginUserService } from '../loggin-user.service';

@Component({
  selector: 'app-regreso-equipos-lista',
  templateUrl: './regreso-equipos-lista.component.html',
  styleUrls: ['./regreso-equipos-lista.component.css']
})
export class RegresoEquiposListaComponent implements OnInit {

  dataSource: any= [];
  dataSource2: UserI[]= [];
  columnsToDisplay = ['orderNumber','enfermera','zona','fKnumberOperating', 'buttons'];

  constructor(public service: MedicineService,
              private router: Router,
              public serviceUser: LogginUserService) { }

 ngOnInit(): void { 
    this.service.getOrderInfo().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<OrderMedicines>(data.result as OrderMedicines[]);
     
      
      
      
    });

    this.serviceUser.getUsers().subscribe((data:any) =>{
      this.dataSource2 = (data.result as UserI[]);
        


    });

  }


  enfermeraNombre(id:Number){
    localStorage.setItem('nombreEnfermera', this.dataSource2.find(x=>x.idUser == id)?.name +' '+this.dataSource2.find(x=>x.idUser == id)?.lastName);
    return(this.dataSource2.find(x=>x.idUser == id)?.name +' '+this.dataSource2.find(x=>x.idUser == id)?.lastName); 
  }

  regresarEquipo(idOrden:Number){
    var charge = localStorage.getItem('idChargeUse');

    if(charge == "6" || charge == "1" || charge =="3"|| charge =="7"){
      this.router.navigate(['nurseTecnicoEntregaEquipos']);
    }

    if(charge =="2"|| charge =="4"){
      localStorage.setItem('idOrdenBorrar', idOrden.toString());
      this.router.navigate(['tecnicoEntregaEquipos']);
    }

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
