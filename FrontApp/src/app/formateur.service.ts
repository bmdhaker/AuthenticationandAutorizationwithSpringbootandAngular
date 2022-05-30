import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private baseUrl = 'http://localhost:9093/api/test/formateurs';

  constructor(private http: HttpClient) { }

  getFormateur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFormateur(formateur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, formateur);
  }

  updateFormateur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFormateur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFormateursList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
