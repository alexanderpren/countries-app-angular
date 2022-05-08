import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  get params() {
    return new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,region,flag,population'
    );
  }

  searchByCountry(country: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${country}`, {
      params: this.params,
    });
  }

  searchByCapital(capital: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${capital}`, {
      params: this.params,
    });
  }

  searchCountryByCode(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/alpha/${code}`);
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${region}`;
    return this.http
      .get<Country[]>(url, { params: this.params })
      .pipe(tap(console.log));
  }
}
