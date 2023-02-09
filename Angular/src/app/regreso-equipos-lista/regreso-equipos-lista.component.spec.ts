import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresoEquiposListaComponent } from './regreso-equipos-lista.component';

describe('RegresoEquiposListaComponent', () => {
  let component: RegresoEquiposListaComponent;
  let fixture: ComponentFixture<RegresoEquiposListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegresoEquiposListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegresoEquiposListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
