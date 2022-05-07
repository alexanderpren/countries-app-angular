import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  country: string = 'Mexico';
  isError: boolean = false;
  countries: Country[] = [];
  constructor(private countryService: CountryService) {}
  search() {
    this.isError = false;
    this.countryService.searchByCountry(this.country).subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (e) => {
        console.error(e);
        this.isError = true;
        this.countries = [];
      },
      complete: () => console.info('complete'),
    });
  }
}
