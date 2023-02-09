import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserInterface } from './Interfaces/UserInterface';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LogginUserService {

  baserUrl: string = 'https://localhost:44379/api/Users/';

  constructor(private http: HttpClient,
              private router:Router) { }


  getUsers(){
    let  auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.get(this.baserUrl, { headers: headers});
  }

  login(user: UserInterface){
    return this.http.post(this.baserUrl+'LoginUsuarios', user);
  }

  register(user: UserInterface){
    return this.http.post(this.baserUrl+'Registrar', user);
  }

  getCargos(){
    return this.http.get(this.baserUrl+'getCargos');
  }

  get getCharge(){
    return localStorage.getItem('idChargeUse');
  }

  get isAuthenticado(){
    return !!localStorage.getItem('token_value');
  }

  logout(){
    localStorage.clear();
    console.clear();
    this.router.navigate(['']);
  

  }
}
