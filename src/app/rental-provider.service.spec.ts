import { TestBed } from '@angular/core/testing';

import { RentalProviderService } from './rental-provider.service';

describe('RentalProviderService', () => {
  let service: RentalProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
