import { TestBed } from '@angular/core/testing';

import { ReferenceService } from './reference.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ReferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: ReferenceService = TestBed.get(ReferenceService);
    expect(service).toBeTruthy();
  });
});
