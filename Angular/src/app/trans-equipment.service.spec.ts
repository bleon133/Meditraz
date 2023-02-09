import { TestBed } from '@angular/core/testing';

import { TransEquipmentService } from './trans-equipment.service';

describe('TransEquipmentService', () => {
  let service: TransEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
