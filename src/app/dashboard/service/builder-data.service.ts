import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBuilderData } from '../ibuilderdata';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuilderDataService {

  private serachText = new Subject<string>();
  filterText$ = this.serachText.asObservable();
  dataPath = '/assets/builders.json';

  constructor(private http: HttpClient) { }

  getBuilderData() {
    return this.http.get<IBuilderData[]>(this.dataPath);
  }
  
  filterText(searchText:string) {
    this.serachText.next(searchText)
  }
}
