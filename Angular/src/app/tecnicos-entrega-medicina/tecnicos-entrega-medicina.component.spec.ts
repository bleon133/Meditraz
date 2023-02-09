import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosEntregaMedicinaComponent } from './tecnicos-entrega-medicina.component';

describe('TecnicosEntregaMedicinaComponent', () => {
  let component: TecnicosEntregaMedicinaComponent;
  let fixture: ComponentFixture<TecnicosEntregaMedicinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicosEntregaMedicinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosEntregaMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
