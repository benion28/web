import { TestBed } from '@angular/core/testing';

import { BenionServiceService } from './benion-service.service';

describe('BenionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BenionServiceService = TestBed.get(BenionServiceService);
    expect(service).toBeTruthy();
  });
});
