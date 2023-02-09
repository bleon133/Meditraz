import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurceMedicinaCaminoComponent } from './nurce-medicina-camino.component';

describe('NurceMedicinaCaminoComponent', () => {
  let component: NurceMedicinaCaminoComponent;
  let fixture: ComponentFixture<NurceMedicinaCaminoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurceMedicinaCaminoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurceMedicinaCaminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
