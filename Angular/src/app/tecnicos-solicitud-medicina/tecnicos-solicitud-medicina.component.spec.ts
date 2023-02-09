import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosSolicitudMedicinaComponent } from './tecnicos-solicitud-medicina.component';

describe('TecnicosSolicitudMedicinaComponent', () => {
  let component: TecnicosSolicitudMedicinaComponent;
  let fixture: ComponentFixture<TecnicosSolicitudMedicinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicosSolicitudMedicinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosSolicitudMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
