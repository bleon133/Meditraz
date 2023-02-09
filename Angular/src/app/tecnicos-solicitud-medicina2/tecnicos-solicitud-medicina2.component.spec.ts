import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosSolicitudMedicina2Component } from './tecnicos-solicitud-medicina2.component';

describe('TecnicosSolicitudMedicina2Component', () => {
  let component: TecnicosSolicitudMedicina2Component;
  let fixture: ComponentFixture<TecnicosSolicitudMedicina2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicosSolicitudMedicina2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosSolicitudMedicina2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
