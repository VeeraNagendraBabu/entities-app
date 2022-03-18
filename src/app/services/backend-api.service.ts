import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs'
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

serverURL:string = "https://api.publicapis.org";

  constructor(private httpClient: HttpClient) {
  }
    getEntries(): Observable<data[]>{
      return this.httpClient.get<data[]>(this.serverURL+"/entries");
   }
}
