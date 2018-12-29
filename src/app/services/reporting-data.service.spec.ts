import { TestBed } from '@angular/core/testing';

import { ReportingDataService } from './reporting-data.service';

describe('ReportingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportingDataService = TestBed.get(ReportingDataService);
    expect(service).toBeTruthy();
  });
});
