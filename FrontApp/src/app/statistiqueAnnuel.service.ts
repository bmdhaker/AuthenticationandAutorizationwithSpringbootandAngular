import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueAnnuelService {

  private baseUrl = 'http://localhost:9093/api/test/statistiqueAnnuels';

  constructor(private http: HttpClient) { }

  getStatistiqueAnnuelsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
