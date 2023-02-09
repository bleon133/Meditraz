import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurceGestionarMedicina2Component } from './nurce-gestionar-medicina2.component';

describe('NurceGestionarMedicina2Component', () => {
  let component: NurceGestionarMedicina2Component;
  let fixture: ComponentFixture<NurceGestionarMedicina2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurceGestionarMedicina2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurceGestionarMedicina2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
