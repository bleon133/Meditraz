import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogginUserService } from '../loggin-user.service';

declare var navegar2: any;

@Component({
  selector: 'app-real-loggin-users',
  templateUrl: './real-loggin-users.component.html',
  styleUrls: ['./real-loggin-users.component.css']
})
export class RealLogginUsersComponent {

  logginData: FormGroup

  constructor(private service:LogginUserService,
              private router:Router,
              private fb:FormBuilder) {

                this.logginData = this.fb.group({
                  username: ['', Validators.required],
                  password: ['', Validators.required],
                  rePassword: [''],
                  name: [''],
                  lastName:[''],
                  email:[''],
                  idChargeUse: [Number],
                  cellPhone: [''],
                  birthdate:[Date],
                  identificationCard: [''],
                  cardID:  ['', Validators.required],
                  gender: ['']
                })
               }

  ngAfterViewInit(){
    navegar2();
  }
  
  onLogin(){
    console.log(this.logginData.value);
    this.logginData.controls['cardID'].setValue('vacio');
    this.logginData.controls['cellPhone'].setValue('vacio');
    this.logginData.controls['email'].setValue('vacio');
    this.logginData.controls['gender'].setValue('vacio');
    this.logginData.controls['identificationCard'].setValue('vacio');
    this.logginData.controls['lastName'].setValue('vacio');
    this.logginData.controls['name'].setValue('vacio');


    this.service.login(this.logginData.value).subscribe((data: any) =>{
      localStorage.setItem('username', data.result.username);
      localStorage.setItem('idChargeUse', data.result.idCargo);
      localStorage.setItem('token_value', data.result.token);
      localStorage.setItem('nombre', data.result.nombreUsuario);
      localStorage.setItem('idUsuario', data.result.idUsuario);
      localStorage.setItem('apellido', data.result.apellidos);
      alert(data.displayMessage);
      this.router.navigate(['/indexLogged']);
    },
    (errorData) => alert(errorData.error.displayMessage));
   
  }

  CrearCuenta(){
    this.router.navigate(['/register']);
  }

  mision(){
    this.router.navigate(['mision']);
  }

  contacto(){
    this.router.navigate(['contacto']);
  }

}
