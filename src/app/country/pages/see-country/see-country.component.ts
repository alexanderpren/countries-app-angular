import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [],
})
export class SeeCountryComponent implements OnInit {
  country !: Country ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ countryId }) =>
          this.countryService.searchCountryByCode(countryId)
        ),
        tap(console.log)
      )
      .subscribe((country) => (this.country = country));

    /*  this.activatedRoute.params.subscribe(({ countryId }) => {
      this.countryService
        .searchCountryByCode(countryId)
        .subscribe((country) => {
          console.log(country);
        });
    });
  } */
  }
}
