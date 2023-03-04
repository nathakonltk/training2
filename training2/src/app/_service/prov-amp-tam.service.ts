import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvAmpTamService {

  constructor(
    private http: HttpClient,
  ) { }
  getTambon(){
    return this.http.get("https://www.anapioficeandfire.com/api/books").pipe(map((res: any) => {
      return res;
    }));
  }
}
