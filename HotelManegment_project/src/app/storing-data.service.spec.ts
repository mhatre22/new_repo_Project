import { TestBed } from '@angular/core/testing';

import { StoringDataService } from './storing-data.service';

describe('StoringDataService', () => {
  let service: StoringDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoringDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
