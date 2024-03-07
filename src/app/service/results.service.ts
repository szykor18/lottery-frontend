// results.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment'; 

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private baseUrl = environment.backendApi;

  constructor(private http: HttpClient) { }

  getResults(id: string): Observable<any> {
    const url = `${this.baseUrl}/results/${id}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('currentUserToken');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
}