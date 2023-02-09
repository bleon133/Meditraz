import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { MatTableDataSource } from '@angular/material/table';
import { request } from '../Interfaces/requestInterface';
import { LogginUserService } from '../loggin-user.service';

@Component({
  selector: 'app-tecnicos-solicitud-medicina',
  templateUrl: './tecnicos-solicitud-medicina.component.html',
  styleUrls: ['./tecnicos-solicitud-medicina.component.css']
})
export class TecnicosSolicitudMedicinaComponent implements OnInit {

  dataSource: any= [];
  dataSource2: UserI[]= [];


  columnsToDisplay = ['orderNumber','enfermera','zona','fKnumberOperating', 'buttons'];

  constructor(public service: MedicineService,
              private router: Router,
              public serviceUser: LogginUserService) { }

 ngOnInit(): void { 
    this.service.getOrderInfo().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<request>(data.result as request[]);
      
    });

    this.serviceUser.getUsers().subscribe((data:any) =>{
      this.dataSource2 = (data.result as UserI[]);
        


    });

  }

  medicinaCamino(idMedicineOne: Number, idMedicineTwo:Number, idMedicineThree:Number, idBodega:Number, idOrden:Number){
    
    localStorage.setItem('medicina1', idMedicineOne.toString());
    localStorage.setItem('medicina2', idMedicineTwo.toString());
    localStorage.setItem('medicina3', idMedicineThree.toString());
    localStorage.setItem('bodega', idBodega.toString());
    localStorage.setItem('idOrden', idOrden.toString());
    
    
    this.router.navigate(['tecnicoSolicitudMedicina2']);
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

