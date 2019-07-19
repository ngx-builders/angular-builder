import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBuilderData } from '../ibuilderdata';

@Injectable({
  providedIn: 'root'
})
export class BuilderDataService {

  dataPath = "/assets/builders.json";

  constructor(private http: HttpClient) { }

  getBuilderData() {
    return this.http.get<IBuilderData[]>(this.dataPath);
  }
}
