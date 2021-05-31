import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReferencesComponent } from './references.component';
import { ReferenceService } from './service/reference.service';

describe('ReferencesComponent', () => {
  let component: ReferencesComponent;
  let fixture: ComponentFixture<ReferencesComponent>;
  let referenceServiceStub: Partial<ReferenceService>;

  referenceServiceStub = {
    getReferenceData: jasmine.createSpy()
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferencesComponent ],
      providers: [ { provide: ReferenceService, useValue: referenceServiceStub } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
