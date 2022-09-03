import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteurService {

  private baseUrl = 'http://localhost:9093/api/test/compteurs';

  constructor(private http: HttpClient) { }

  getCompteur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCompteur(compteur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, compteur);
  }

  updateCompteur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCompteur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCompteursList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createCompteurwithuser(compteur: Object, username: string): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${username}`, compteur);
  }

  
}
