import { TestBed, inject } from '@angular/core/testing';

import { EmployeServiceService } from './employe-service.service';

describe('EmployeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeServiceService]
    });
  });

  it('should ...', inject([EmployeServiceService], (service: EmployeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
