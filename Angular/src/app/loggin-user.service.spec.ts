import { TestBed } from '@angular/core/testing';

import { LogginUserService } from './loggin-user.service';

describe('LogginUserService', () => {
  let service: LogginUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogginUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
