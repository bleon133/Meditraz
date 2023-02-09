import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurceGestionarMedicinaComponent } from './nurce-gestionar-medicina.component';

describe('NurceGestionarMedicinaComponent', () => {
  let component: NurceGestionarMedicinaComponent;
  let fixture: ComponentFixture<NurceGestionarMedicinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurceGestionarMedicinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurceGestionarMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
