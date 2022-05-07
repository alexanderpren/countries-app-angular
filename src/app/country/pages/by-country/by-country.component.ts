import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  constructor(private countryService: CountryService) {}

  word: string = 'Mexico';
  isError: boolean = false;
  countries: Country[] = [];

  search(wordToSearch: string) {
    this.isError = false;
    this.word = wordToSearch;

    this.countryService.searchByCountry(this.word).subscribe({
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

  suggestions(wordToSearch: string) {
    this.isError = false;
    this.word = wordToSearch;
  }
}
