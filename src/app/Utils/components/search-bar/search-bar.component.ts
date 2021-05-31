import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { BuilderDataService } from 'src/app/dashboard/service/builder-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  exportAs: 'searchBar'
})
export class SearchBarComponent implements OnInit {
  @ViewChild('inputRef', {static: true}) inputRef: HTMLElement;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  emmiter: Subject<any> = new Subject();
  
  constructor(private dataService: BuilderDataService) {}

  ngOnInit() {
    this.emmiter
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      ).subscribe(val => this.onChange.emit(val));
  }

  onInputChange(event:any) {
    const searchText = ('' + event.target.value).toUpperCase();
    this.dataService.filterText(searchText);
  }
}
