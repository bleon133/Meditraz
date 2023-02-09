import { Component, DebugElement, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser'


declare var navegar: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private router: Router,
              private titulo: Title) {
                  titulo.setTitle('MediTrazApp');
               }


  ngAfterViewInit(){
    navegar();
  }

  mision(){
    this.router.navigate(['mision']);
  }

  contacto(){
    this.router.navigate(['contacto']);

  }

  vision(){
    this.router.navigate(['vision']);
  }

  onButtonRegister(){
    
    this.router.navigateByUrl('/register');
  }

  onButtonLoggin(){
    
    this.router.navigateByUrl('/loggin');
  }

  nosotros(){
    this.router.navigate(['nosotros']);
  }

}
