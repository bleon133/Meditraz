import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse-tecnico-regreso-equipo',
  templateUrl: './nurse-tecnico-regreso-equipo.component.html',
  styleUrls: ['./nurse-tecnico-regreso-equipo.component.css']
})
export class NurseTecnicoRegresoEquipoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  return(){
    this.router.navigate(['indexLogged']);
  }

}
