import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  regions: string[] = [
    'eu',
    'efta',
    'caricom',
    'pa',
    'au',
    'usan',
    'eeu',
    'al',
    'asean',
    'cais',
    'cefta',
    'nafta',
    'saarc',
  ];

  activeRegion: string = '';
  countriesByContinent: Country[] = [];

  constructor(private countryService: CountryService) {}

  changeActiveRegion(region: string) {
    if (this.activeRegion === region) return;
    this.countriesByContinent = [];
    this.activeRegion = region;
    this.countryService.searchByRegion(region).subscribe((countries) => {
      this.countriesByContinent = countries;
    });
  }

  getClassCSSButton(region: string) {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
