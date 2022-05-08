import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  constructor(private countryService: CountryService) {}

  word: string = 'Mexico';
  isError: boolean = false;
  countries: Country[] = [];
  suggestions: Country[] = [];
  showSuggestions: boolean = false;

  search(wordToSearch: string) {
    this.showSuggestions = false;
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

  getSuggestions(wordToSearch: string) {
    this.isError = false;
    this.word = wordToSearch;
    this.showSuggestions = true;
    this.countryService.searchByCountry(wordToSearch).subscribe(
      (countries) => (this.suggestions = countries.splice(0, 5)),
      (e) => {
        console.error(e);
        this.isError = true;
        this.suggestions = [];
      }
    );
  }

  searchSuggestions(wordToSearch: string) {
    this.isError = false;
    this.word = wordToSearch;
    this.showSuggestions = true;
    this.search(wordToSearch);
  }
}
