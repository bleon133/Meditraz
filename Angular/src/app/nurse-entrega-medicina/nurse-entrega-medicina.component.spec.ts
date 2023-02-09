import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseEntregaMedicinaComponent } from './nurse-entrega-medicina.component';

describe('NurseEntregaMedicinaComponent', () => {
  let component: NurseEntregaMedicinaComponent;
  let fixture: ComponentFixture<NurseEntregaMedicinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseEntregaMedicinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseEntregaMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
