import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private baseUrl = 'http://localhost:9093/api/test/tokens';


  constructor(private http: HttpClient) { }

  getToken(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createToken(token: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, token);
  }

  updateToken(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteToken(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTokensList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createTokenUsername(token: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, token);
  }

  

}
