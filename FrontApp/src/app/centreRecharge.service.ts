import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentreRechargeService {

  private baseUrl = 'http://localhost:9093/api/test/centreRecharges';


  constructor(private http: HttpClient) { }

  getCentreRecharge(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCentreRecharge(centreRecharge: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, centreRecharge);
  }

  updateCentreRecharge(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCentreRecharge(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCentreRechargesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createCentreRechargeUsername(centreRecharge: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, centreRecharge);
  }

  

}
