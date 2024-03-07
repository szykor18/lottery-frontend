// game.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = environment.backendApi;

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('currentUserToken');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  inputNumbers(numbers: number[]): Observable<any> {
    const url = `${this.baseUrl}/inputNumbers`;
    return this.http.post(url, { inputNumbers: numbers }, { headers: this.getHeaders() });
  }
}