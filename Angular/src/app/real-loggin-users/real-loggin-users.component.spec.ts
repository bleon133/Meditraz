import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealLogginUsersComponent } from './real-loggin-users.component';

describe('RealLogginUsersComponent', () => {
  let component: RealLogginUsersComponent;
  let fixture: ComponentFixture<RealLogginUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealLogginUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealLogginUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
