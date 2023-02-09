import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseSolicitudMedicina2Component } from './nurse-solicitud-medicina2.component';

describe('NurseSolicitudMedicina2Component', () => {
  let component: NurseSolicitudMedicina2Component;
  let fixture: ComponentFixture<NurseSolicitudMedicina2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseSolicitudMedicina2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseSolicitudMedicina2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
