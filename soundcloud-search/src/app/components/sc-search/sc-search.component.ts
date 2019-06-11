import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Track } from 'src/app/models/track';

@Component({
  selector: 'app-sc-search',
  templateUrl: './sc-search.component.html',
  styleUrls: ['./sc-search.component.scss']
})
export class ScSearchComponent implements OnInit {
  @Input() tracks: Track[];
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
