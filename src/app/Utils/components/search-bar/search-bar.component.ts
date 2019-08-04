import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

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
  constructor() {}

  ngOnInit() {
    this.emmiter
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe(val => this.onChange.emit(val));
  }

  onInputChange(event) {
    this.emmiter.next(('' + event.target.value).toUpperCase());
  }
}
