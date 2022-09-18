import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BonusService {

  private baseUrl = 'http://localhost:9093/api/test/bonuss';
  private baseUrlByUser = 'http://localhost:9093/api/test/bonussByUser';

  constructor(private http: HttpClient) { }

  getBonus(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBonus(bonus: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, bonus);
  }

  updateBonus(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBonus(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBonussList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getBonussByUserList(): Observable<any> {
    return this.http.get(`${this.baseUrlByUser}`);
  }

}
