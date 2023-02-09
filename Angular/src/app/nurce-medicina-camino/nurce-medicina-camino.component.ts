import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { MatTableDataSource } from '@angular/material/table';
import { request } from '../Interfaces/requestInterface';
import { LogginUserService } from '../loggin-user.service';

@Component({
  selector: 'app-nurce-medicina-camino',
  templateUrl: './nurce-medicina-camino.component.html',
  styleUrls: ['./nurce-medicina-camino.component.css']
})
export class NurceMedicinaCaminoComponent implements OnInit {
  
  dataSource: any= [];
  dataSource2: UserI[]= [];
  columnsToDisplay = ['orderNumber','enfermera','zona','fKnumberOperating', 'buttons'];

  constructor(public service: MedicineService,
              private router: Router,
              public serviceUser: LogginUserService) { }

 ngOnInit(): void { 
    this.service.getOrderInfo().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<request>(data.result as request[]);
      console.log(this.dataSource);
      
      
      
    });

    this.serviceUser.getUsers().subscribe((data:any) =>{
      this.dataSource2 = (data.result as UserI[]);
        


    });

  }

  gestionMedicina(id:Number, fk:Number, fkmed1:Number, fkmed2:Number, fkmed3:Number){

    var charge = localStorage.getItem('idChargeUse');

    if(charge == "6"|| charge == "1"|| charge == "3"|| charge =="7"){
      localStorage.setItem('idOrden', id.toString());
      localStorage.setItem('bodega', fk.toString());
      this.router.navigate(['nurseMedicinaCamino2']); 

    }

    if(charge == "2"|| charge =="4"){
      localStorage.setItem('idOrden', id.toString());
      localStorage.setItem('bodega', fk.toString());
      localStorage.setItem('medicina1', fkmed1.toString());
      localStorage.setItem('medicina2', fkmed2.toString());
      localStorage.setItem('medicina3', fkmed3.toString());
      this.router.navigate(['tecnicoDespachoMedicinaCamino']);
    }
    
  }

  enfermeraNombre(id:Number){
    localStorage.setItem('nombreEnfermera', this.dataSource2.find(x=>x.idUser == id)?.name +' '+this.dataSource2.find(x=>x.idUser == id)?.lastName);
    return(this.dataSource2.find(x=>x.idUser == id)?.name +' '+this.dataSource2.find(x=>x.idUser == id)?.lastName); 
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