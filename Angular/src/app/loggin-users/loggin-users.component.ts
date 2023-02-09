import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogginUserService } from '../loggin-user.service';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-loggin-users',
  templateUrl: './loggin-users.component.html',
  styleUrls: ['./loggin-users.component.css']
})
export class LogginUsersComponent{

  userForm: FormGroup

  constructor(private service: LogginUserService,
              private router: Router,
              private fb: FormBuilder,
              private titulo: Title) {
 
                titulo.setTitle('Registro Usuarios');

                this.userForm = this.fb.group({
                  username: ['', Validators.required],
                  password: ['', Validators.required],
                  rePassword: ['', Validators.required],
                  name: ['', Validators.required],
                  lastName:['', Validators.required],
                  email:['', Validators.required],
                  idChargeUse:[Number, Validators.required],
                  cellPhone:['', Validators.required],
                  birthdate:[Date, Validators.required],
                  identificationCard: ['', Validators.required],
                  cardID: ['', Validators.required],
                  gender:['', Validators.required]
               });
  
  
  
   }

   returnScreen(){
    this.router.navigateByUrl(''); 
   }

  enviar() {
    console.log(this.userForm.value);

    this.service.register(this.userForm.value).subscribe((data: any) =>{
      localStorage.setItem('username', data.result.username);
      localStorage.setItem('idChargeUse', data.result.idCargo);
      localStorage.setItem('token_value', data.result.token);
      localStorage.setItem('nombre', data.result.nombreUsuario);
      localStorage.setItem('idUsuario', data.result.idUsuario);
      localStorage.setItem('apellido', data.result.apellidos);
      this.router.navigate(['/indexLogged']);
    })

    
  }


}
