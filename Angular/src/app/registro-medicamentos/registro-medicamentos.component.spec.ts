import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMedicamentosComponent } from './registro-medicamentos.component';

describe('RegistroMedicamentosComponent', () => {
  let component: RegistroMedicamentosComponent;
  let fixture: ComponentFixture<RegistroMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMedicamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
