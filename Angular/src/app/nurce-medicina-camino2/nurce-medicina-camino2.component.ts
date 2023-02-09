import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LogginUserService } from '../loggin-user.service';
import { MedicineService } from '../medicine.service';
import { TransEquipmentService } from '../trans-equipment.service';

@Component({
  selector: 'app-nurce-medicina-camino2',
  templateUrl: './nurce-medicina-camino2.component.html',
  styleUrls: ['./nurce-medicina-camino2.component.css']
})
export class NurceMedicinaCamino2Component implements OnInit {

  dataSourceMedicines: pedidos[] = [];
  dataSourcePedidos: pedidos[]=[];  //pedido que se va a mostrar
  
  dataSourceUsuarios: UserI[] = []; //todos los usuarios registrados

  dataSourceEquipos: equipos[] = []; //todos los equipos



  constructor(private router: Router,
    private service: MedicineService,
    private serviceUser: LogginUserService,
    private serviceTrans: TransEquipmentService,
    private title:Title) { }


  ngOnInit(): void {

    this.title.setTitle('MeditrazApp');

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

  }

  return(){
    this.router.navigate(['indexLogged']);
  }

  personaEntrega(){
    return (this.dataSourceUsuarios.find(x=>x.idUser == this.dataSourcePedidos[0].idPersonaWhoDelivers)?.name +' '+this.dataSourceUsuarios.find(x=>x.idUser == this.dataSourcePedidos[0].idPersonaWhoDelivers)?.lastName);
  }

  personaTransporta(){
    return (this.dataSourceUsuarios.find(x=>x.idUser == this.dataSourcePedidos[0].idPersonWhoTransports)?.name +' '+this.dataSourceUsuarios.find(x=>x.idUser == this.dataSourcePedidos[0].idPersonWhoTransports)?.lastName);
  }

  personaRecibe(){
    
    return (this.dataSourceUsuarios.find(x=>x.idUser == this.dataSourcePedidos[0].idPersonWhoWillReceive)?.name +' '+this.dataSourceUsuarios.find(x=>x.idUser == this.dataSourcePedidos[0].idPersonWhoWillReceive)?.lastName);

  }

  quirofano(){
    return 'Quirofano/'+localStorage.getItem('bodega');
  }

  equipo(){
    return (this.dataSourceEquipos.find(x=>x.idTranspEquip == this.dataSourcePedidos[0].idTransportationMedications)?.nameTranspEquip);
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

  /**
   *
   */
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

