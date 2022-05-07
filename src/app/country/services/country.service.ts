import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  searchByCountry(country: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${country}`);
  }

  searchByCapital(capital: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${capital}`);
  }

  searchCountryByCode(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/alpha/${code}`);
  }
}
