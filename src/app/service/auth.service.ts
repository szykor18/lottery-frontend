import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.backendApi;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId : Object) { }
  
  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.apiUrl + '/token', { username, password }).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('currentUserToken', response.token);
          return true;
        }
        return false;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUserToken');
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('currentUserToken');
      return token != null;
    }
    return false;
  }

  register(user: { username: string, password: string }): Observable<any> {
    return this.http.post(this.apiUrl + '/register', user);
}
}
