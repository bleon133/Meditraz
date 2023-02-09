import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurce-gestionar-medicina2',
  templateUrl: './nurce-gestionar-medicina2.component.html',
  styleUrls: ['./nurce-gestionar-medicina2.component.css']
})
export class NurceGestionarMedicina2Component implements OnInit {

  constructor(private router:Router,
              private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('MeditrazApp');
  }

  return(){
      this.router.navigate(['indexLogged']);
  }

}
