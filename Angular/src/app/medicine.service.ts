import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { medicineInterface } from './Interfaces/medicineInterface';
import { pedidos } from './Interfaces/pedidos';
import { request } from './Interfaces/requestInterface';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  baserUrl: string = 'https://localhost:44379/api/storedMedicines/';
  baserUrlOrder: string = 'https://localhost:44379/api/OrderMedecines/';
  baseUrlManagment: string = 'https://localhost:44379/api/medicationManagement/';

  constructor(private http: HttpClient,
              private router:Router) { } 


  logout(){
    localStorage.clear();
    console.clear();
    this.router.navigate(['']);
  

  }

  terminarPedido(id:Number){
    let  auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.delete(this.baserUrlOrder+'BorrarOrden/'+id, { headers: headers});
  }

  obtenerPedidos(){
    let  auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.get(this.baseUrlManagment+'ObtenerPedidos', { headers: headers});
  }

  administrarPedido(pedido:pedidos){
    let  auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })


    return this.http.post(this.baseUrlManagment+'AdministrarPedido', pedido, { headers: headers});
  }

  getOrderInfo(){
    let  auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.get(this.baserUrlOrder+'ObtenerOrdenes', { headers: headers});
  }

  registerMedicine(medicine: medicineInterface){ 
    let  auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })


    return this.http.post(this.baserUrl+'RegistrarMedicamentos', medicine, { headers: headers});
  }

  getMedicines(){
    let  auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.get(this.baserUrl+'ObtenerMedicinas', { headers: headers});

  }

  requestMedicine(requestMed: request){
    let  auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.post(this.baserUrlOrder+'CrearNuevaOrden', requestMed, { headers: headers});
  }

  getOrderById(id:Number){
    let  auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.get(this.baserUrlOrder+'ObtenerOrden/'+id, { headers: headers});
  }


}
