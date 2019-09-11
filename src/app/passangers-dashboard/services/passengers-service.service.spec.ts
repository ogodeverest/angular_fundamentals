import { TestBed } from '@angular/core/testing';

import { PassengersServiceService } from './passengers-service.service';

describe('PassengersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassengersServiceService = TestBed.get(PassengersServiceService);
    expect(service).toBeTruthy();
  });
});
