import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMedicationsComponent } from './request-medications.component';

describe('RequestMedicationsComponent', () => {
  let component: RequestMedicationsComponent;
  let fixture: ComponentFixture<RequestMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestMedicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
