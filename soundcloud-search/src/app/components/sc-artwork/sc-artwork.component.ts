import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Track } from 'src/app/models/track';
import { fade } from './animations';

@Component({
  selector: 'app-sc-artwork',
  templateUrl: './sc-artwork.component.html',
  styleUrls: ['./sc-artwork.component.scss'],
  animations: fade
})
export class ScArtworkComponent implements OnInit, OnChanges {
  @Input() selectedTrack: Track;
  imageSource = '';
  state = 'in';
  prevTrack: Track;
  currentTrack: Track;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.prevTrack = this.currentTrack;
    this.currentTrack = this.selectedTrack;

    if (this.currentTrack && this.currentTrack.artwork_url) {
      if (this.prevTrack && this.prevTrack.artwork_url) {
        this.state = 'out';
      } else {
        this.imageSource = this.currentTrack.artwork_url;
      }
    } else {
      this.imageSource = '';
    }
  }

  onDone($event) {
    if (this.prevTrack && this.imageSource === this.prevTrack.artwork_url) {
      this.state = 'in';
      this.imageSource = this.currentTrack.artwork_url;
    }
  }
}
