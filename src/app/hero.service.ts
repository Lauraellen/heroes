import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(offset: number, limit: number): Observable<any> {
    const apiKey = '612f3c5e79e32aae7dcafe95140d862f';
    const url = 'https://gateway.marvel.com:443';
    // hash tem que ser gerado
    // é ts + apikeyprivate + apikeypublic
    
    const hash = 'd0d9dec7afc714e672ab2f1800d4ad60';
    return this.http.get<any>(url + '/v1/public/characters?ts=2&apikey=' + apiKey + '&hash=' + hash +
      '&limit=' + limit + '&offset=' + offset);
    
  }

  getComics(id: any): Observable<any> {
    const apiKey = '612f3c5e79e32aae7dcafe95140d862f';
    const url = 'https://gateway.marvel.com:443';
    const hash = 'd0d9dec7afc714e672ab2f1800d4ad60';

    return this.http.get<any>(url + '/v1/public/characters/' + id + '/comics?ts=2&apikey=' + apiKey +
      '&hash=' + hash);
  }
}