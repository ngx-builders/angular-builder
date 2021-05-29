import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BuilderDataService } from './builder-data.service';

describe('BuilderDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: BuilderDataService = TestBed.get(BuilderDataService);
    expect(service).toBeTruthy();
  });
});
