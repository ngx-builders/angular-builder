import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BuilderDataService } from 'src/app/dashboard/service/builder-data.service';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let builderDataServiceStub: Partial<BuilderDataService>;

  builderDataServiceStub = {
    getBuilderData: jasmine.createSpy(),
    filterText: jasmine.createSpy()
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      providers: [ { provide: BuilderDataService, useValue: builderDataServiceStub } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
