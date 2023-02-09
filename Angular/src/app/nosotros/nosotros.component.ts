import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css',
                './addon.css']
})
export class NosotrosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  return(){
    this.router.navigate(['']);
  }

}
