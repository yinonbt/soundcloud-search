import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Track } from 'src/app/models/track';

@Component({
  selector: 'app-sc-search',
  templateUrl: './sc-search.component.html',
  styleUrls: ['./sc-search.component.scss']
})
export class ScSearchComponent implements OnInit, OnChanges {
  
  @Input() tracks: Track[];
  @Input() selectedTrack: Track;
  @Input() query: string;
  @Output() searchRequested = new EventEmitter<string>();
  @Output() trackSelected = new EventEmitter<Track>();

  searchFormGroup = this.formBuilder.group({
    formControlSearch: [this.query, Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.searchFormGroup.get('formControlSearch').setValue(this.query);
  }

  execSearch() {
    let query: string = this.searchFormGroup
      .get('formControlSearch')
      .value.toString();
    query = query.trim();
    if (query) {
      this.searchRequested.emit(query);
    }
  }

  onTrackSelected(track: Track) {
    this.trackSelected.emit(track);
  }
}
