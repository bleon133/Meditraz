import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-tecnicos-regreso-equipo',
  templateUrl: './tecnicos-regreso-equipo.component.html',
  styleUrls: ['./tecnicos-regreso-equipo.component.css']
})
export class TecnicosRegresoEquipoComponent implements OnInit {

  constructor(private router: Router,
    public service: MedicineService) { }


    eliminado:boolean = false;

  ngOnInit(): void {
  }


  terminar(){
    alert('El equipo ha llegado a su destino con éxito.');

    this.service.terminarPedido(Number(localStorage.getItem('idOrdenBorrar'))).subscribe((data:any) =>{
      this.eliminado = (data.result);
    });

    this.router.navigate(['indexLogged'])
  }

}
