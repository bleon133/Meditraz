import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoDespachoMedicinaCambioComponent } from './tecnico-despacho-medicina-cambio.component';

describe('TecnicoDespachoMedicinaCambioComponent', () => {
  let component: TecnicoDespachoMedicinaCambioComponent;
  let fixture: ComponentFixture<TecnicoDespachoMedicinaCambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicoDespachoMedicinaCambioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoDespachoMedicinaCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
