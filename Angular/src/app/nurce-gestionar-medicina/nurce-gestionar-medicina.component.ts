import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { MatTableDataSource } from '@angular/material/table';
import { request } from '../Interfaces/requestInterface';
import { LogginUserService } from '../loggin-user.service';

@Component({
  selector: 'app-nurce-gestionar-medicina',
  templateUrl: './nurce-gestionar-medicina.component.html',
  styleUrls: ['./nurce-gestionar-medicina.component.css']
})
export class NurceGestionarMedicinaComponent implements OnInit {
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

  gestionMedicina(){
    this.router.navigate(['nurseGestionarMedicina2']);
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
