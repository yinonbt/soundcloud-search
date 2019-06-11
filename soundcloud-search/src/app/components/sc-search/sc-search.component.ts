import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sc-search',
  templateUrl: './sc-search.component.html',
  styleUrls: ['./sc-search.component.scss']
})
export class ScSearchComponent implements OnInit {
  @Output() searchRequested = new EventEmitter<string>();
  query: string;

  searchFormGroup = this.formBuilder.group({
    formControlSearch: [this.query, Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  execSearch() {
    let query: string = this.searchFormGroup
      .get('formControlSearch')
      .value.toString();
    query = query.trim();
    if (query) {
      this.searchRequested.emit(query);
    }
  }
}
