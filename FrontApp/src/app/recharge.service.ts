import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  private baseUrl = 'http://localhost:9093/api/test/recharges';

  constructor(private http: HttpClient) { }

  getRechargesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createRecharge(rechargeform: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, rechargeform);
  }

  updateRecharge(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRecharge(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  rechargerwithLoggedcentreRecharge(username: string, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${username}`, value);
  }

  /*getRechargesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }*/
  
}
