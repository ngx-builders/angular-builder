import { TestBed } from '@angular/core/testing';

import { ReferenceService } from './reference.service';

describe('ReferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReferenceService = TestBed.get(ReferenceService);
    expect(service).toBeTruthy();
  });
});
