import { TestBed, inject } from '@angular/core/testing';

import { EmployeService } from './employee.service';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeService]
    });
  });

  it('should ...', inject([EmployeService], (service: EmployeService) => {
    expect(service).toBeTruthy();
  }));
});
