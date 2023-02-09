import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosRegresoEquipoComponent } from './tecnicos-regreso-equipo.component';

describe('TecnicosRegresoEquipoComponent', () => {
  let component: TecnicosRegresoEquipoComponent;
  let fixture: ComponentFixture<TecnicosRegresoEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicosRegresoEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosRegresoEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
