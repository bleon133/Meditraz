import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseSolicitudMedicinaComponent } from './nurse-solicitud-medicina.component';

describe('NurseSolicitudMedicinaComponent', () => {
  let component: NurseSolicitudMedicinaComponent;
  let fixture: ComponentFixture<NurseSolicitudMedicinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseSolicitudMedicinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseSolicitudMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
