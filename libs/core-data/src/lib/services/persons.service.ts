import { PersonPagination, Result } from './../../../../api-interfaces/src/lib/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";


const BASE_URL = 'https://randomuser.me/';
const MODEL = 'api/';



@Injectable({
  providedIn: 'root'
})
export class PersonsService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Result[]> {
    return this.http.get<PersonPagination>(this.getUrl()).pipe(
      tap((res) => console.log(res)),
      map((response) => response.results)
    );
  };

  getOne(id: string): Observable<Result> {
    return this.http.get<Result>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${MODEL}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}