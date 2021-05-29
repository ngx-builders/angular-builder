import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBuilderData } from '../ibuilderdata';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuilderDataService {

  private searchText = new Subject<string>();
  filterText$ = this.searchText.asObservable();
  dataPath = '/assets/builders.json';

  constructor(private http: HttpClient) { }

  getBuilderData() {
    return this.http.get<IBuilderData[]>(this.dataPath);
  }
  
  filterText(text:string) {
    this.searchText.next(text)
  }
}
