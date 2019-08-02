import { Component, OnInit } from '@angular/core';
import { BuilderDataService } from './service/builder-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  builders$ = this.dataService.getBuilderData();;
  constructor(private dataService: BuilderDataService) { }

}
