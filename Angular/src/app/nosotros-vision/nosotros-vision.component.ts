import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosotros-vision',
  templateUrl: './nosotros-vision.component.html',
  styleUrls: ['./nosotros-vision.component.css',
              './addon.css']
})
export class NosotrosVisionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  return(){
    this.router.navigate(['']);
  }

}
