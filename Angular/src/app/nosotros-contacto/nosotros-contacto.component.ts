import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosotros-contacto',
  templateUrl: './nosotros-contacto.component.html',
  styleUrls: ['./nosotros-contacto.component.css']
})
export class NosotrosContactoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  return(){
    this.router.navigate(['']);
  }

}
