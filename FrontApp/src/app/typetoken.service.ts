import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypetokenService {

  private baseUrl = 'http://localhost:9093/api/test/typetokens';
  private baseUrlByUser = 'http://localhost:9093/api/test/typetokensByUser';

  constructor(private http: HttpClient) { }

  getTypetoken(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTypetoken(typetoken: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, typetoken);
  }

  updateTypetoken(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTypetoken(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTypetokensList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTypetokensByUserList(): Observable<any> {
    return this.http.get(`${this.baseUrlByUser}`);
  }

}
