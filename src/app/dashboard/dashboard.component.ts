import { SearchBarComponent } from './../Utils/components/search-bar/search-bar.component';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { BuilderDataService } from './service/builder-data.service';
import { shareReplay } from 'rxjs/operators';
import { IBuilderData } from './ibuilderdata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  builders$ = this.dataService.getBuilderData().pipe(shareReplay());
  allBuilders: IBuilderData[] = [];

  @ViewChild('sb', { static: true }) sb: SearchBarComponent;
  constructor(private dataService: BuilderDataService) {}

  ngOnInit(): void {
    this.getBuilderData('');

    this.dataService.filterText$.subscribe(searchText=> {
      this.getBuilderData(searchText);
    })
  }

  ngAfterViewInit(): void {}

  private getBuilderData(searchText:string) {
    this.builders$.subscribe(res => {
      this.allBuilders = res.filter(
        builder =>
          (builder.name + '' + builder.description).toUpperCase().indexOf(searchText) > -1
      );
    });
  }

}
