import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurceMedicinaCamino2Component } from './nurce-medicina-camino2.component';

describe('NurceMedicinaCamino2Component', () => {
  let component: NurceMedicinaCamino2Component;
  let fixture: ComponentFixture<NurceMedicinaCamino2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurceMedicinaCamino2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurceMedicinaCamino2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
