import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEquipTransporteComponent } from './registro-equip-transporte.component';

describe('RegistroEquipTransporteComponent', () => {
  let component: RegistroEquipTransporteComponent;
  let fixture: ComponentFixture<RegistroEquipTransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEquipTransporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEquipTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
