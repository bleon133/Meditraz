import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosGestionMedicamentosComponent } from './tecnicos-gestion-medicamentos.component';

describe('TecnicosGestionMedicamentosComponent', () => {
  let component: TecnicosGestionMedicamentosComponent;
  let fixture: ComponentFixture<TecnicosGestionMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicosGestionMedicamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosGestionMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
