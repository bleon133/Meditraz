import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


declare var navegar: any;

@Component({
  selector: 'app-nosotros-mision',
  templateUrl: './nosotros-mision.component.html',
  styleUrls: ['./nosotros-mision.component.css']
})
export class NosotrosMisionComponent{

  constructor(private router: Router,
    private titulo: Title) {
        titulo.setTitle('MediTrazApp');
     }


    ngAfterViewInit(){
    navegar();
    }

    return(){
      this.router.navigate(['']);
    }

    mision(){
    this.router.navigate(['mision']);
    }

    contacto(){
    this.router.navigate(['contacto']);

    }

    onButtonRegister(){

    this.router.navigateByUrl('/register');
    }

    onButtonLoggin(){

    this.router.navigateByUrl('/loggin');
    }


  

}
