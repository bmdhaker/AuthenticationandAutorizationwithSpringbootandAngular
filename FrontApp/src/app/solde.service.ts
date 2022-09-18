import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoldeService {

  private baseUrl = 'http://localhost:9093/api/test/soldes';

  constructor(private http: HttpClient) { }

  getSolde(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSolde(solde: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, solde);
  }

  updateSolde(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSolde(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  /*getSoldesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }*/
  getSoldesList(username: string,listSolde:boolean): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}/${listSolde}`);
  }

  getSoldesofUser(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

}
