import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  constructor(private countryService: CountryService) {}

  word: string = 'Lima';
  isError: boolean = false;
  countries: Country[] = [];

  search(wordToSearch: string) {
    this.isError = false;
    this.word = wordToSearch;

    this.countryService.searchByCapital(this.word).subscribe({
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
