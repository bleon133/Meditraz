import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginUsersComponent } from './loggin-users.component';

describe('LogginUsersComponent', () => {
  let component: LogginUsersComponent;
  let fixture: ComponentFixture<LogginUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogginUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogginUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
