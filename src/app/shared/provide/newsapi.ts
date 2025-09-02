import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewsApiService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines';
  private apiKey = '429223923f894ee4af2bf86c64298863'; // Reemplaza con tu clave real

  constructor(private http: HttpClient) {}

  getNews(country: string = 'us'): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: { country },
      headers: { 'X-Api-Key': this.apiKey }
    });
  }
}