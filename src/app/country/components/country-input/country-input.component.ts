import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = 'Search ....';

  debouncer: Subject<string> = new Subject();
  word: string = '';

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  searchCountry() {
    this.onEnter.emit(this.word);
  }

  keyPress() {
    console.log('keyPress: ', this.word);
    this.debouncer.next(this.word);
  }
}
