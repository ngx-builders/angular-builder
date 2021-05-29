import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReference } from '../reference';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {
  referencePath = "/assets/references.json";

  constructor(private http: HttpClient) { }

  getReferenceData() {
    return this.http.get<IReference>(this.referencePath);
  }

}
