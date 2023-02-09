import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosContactoComponent } from './nosotros-contacto.component';

describe('NosotrosContactoComponent', () => {
  let component: NosotrosContactoComponent;
  let fixture: ComponentFixture<NosotrosContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
