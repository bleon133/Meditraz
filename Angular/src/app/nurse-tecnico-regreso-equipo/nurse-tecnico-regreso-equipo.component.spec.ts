import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseTecnicoRegresoEquipoComponent } from './nurse-tecnico-regreso-equipo.component';

describe('NurseTecnicoRegresoEquipoComponent', () => {
  let component: NurseTecnicoRegresoEquipoComponent;
  let fixture: ComponentFixture<NurseTecnicoRegresoEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseTecnicoRegresoEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseTecnicoRegresoEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
