import { TestBed } from '@angular/core/testing';

import { BuilderDataService } from './builder-data.service';

describe('BuilderDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuilderDataService = TestBed.get(BuilderDataService);
    expect(service).toBeTruthy();
  });
});
