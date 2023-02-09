import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { transpEquipmentsI } from './Interfaces/transEquipInterface';

@Injectable({
  providedIn: 'root' 
})
export class TransEquipmentService {
  baserUrl: string = 'https://localhost:44379/api/transpEquipments/';

  constructor(private http: HttpClient,
              private router:Router) { }


              
  register(trans:transpEquipmentsI){

    let  auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })


    return this.http.post(this.baserUrl+'RegistrarEquipo', trans, { headers: headers});
  }    
  
  getEquips(){
    let  auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.get(this.baserUrl+'ObtenerEquipos', { headers: headers});

  }

 

  logout(){
    localStorage.clear();
    console.clear();
    this.router.navigate(['']);
  

  }
}
