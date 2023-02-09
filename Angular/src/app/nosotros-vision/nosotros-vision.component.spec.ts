import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosVisionComponent } from './nosotros-vision.component';

describe('NosotrosVisionComponent', () => {
  let component: NosotrosVisionComponent;
  let fixture: ComponentFixture<NosotrosVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
