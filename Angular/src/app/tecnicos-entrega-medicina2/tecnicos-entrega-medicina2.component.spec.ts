import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosEntregaMedicina2Component } from './tecnicos-entrega-medicina2.component';

describe('TecnicosEntregaMedicina2Component', () => {
  let component: TecnicosEntregaMedicina2Component;
  let fixture: ComponentFixture<TecnicosEntregaMedicina2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicosEntregaMedicina2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosEntregaMedicina2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
