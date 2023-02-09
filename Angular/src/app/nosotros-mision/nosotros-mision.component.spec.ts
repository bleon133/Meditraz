import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosMisionComponent } from './nosotros-mision.component';

describe('NosotrosMisionComponent', () => {
  let component: NosotrosMisionComponent;
  let fixture: ComponentFixture<NosotrosMisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosMisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
