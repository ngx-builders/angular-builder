import { Component, OnInit } from '@angular/core';
import { ReferenceService } from './service/reference.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {

  references$ = this.referenceService.getReferenceData();

  constructor(private referenceService: ReferenceService) { }

}
