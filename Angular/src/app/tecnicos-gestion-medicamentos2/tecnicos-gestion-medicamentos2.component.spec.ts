import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosGestionMedicamentos2Component } from './tecnicos-gestion-medicamentos2.component';

describe('TecnicosGestionMedicamentos2Component', () => {
  let component: TecnicosGestionMedicamentos2Component;
  let fixture: ComponentFixture<TecnicosGestionMedicamentos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicosGestionMedicamentos2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosGestionMedicamentos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
