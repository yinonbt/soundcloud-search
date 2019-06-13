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
  // enableAnimation = false;
  // counter = 0;
  state = 'in';
  // choice = 2;
  prevTrack: Track;
  currentTrack: Track;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    // console.log('this.selectedTrack', this.selectedTrack);
    this.prevTrack = this.currentTrack;
    this.currentTrack = this.selectedTrack;

    if (this.currentTrack && this.currentTrack.artwork_url) {
      // console.log('this.currentTrack.artwork_url: ', this.currentTrack.artwork_url);
      if (this.prevTrack && this.prevTrack.artwork_url) {
        // this.enableAnimation = true;
        // this.counter = 0;
        // this.toggleState();
        this.state = 'out';
      } else {
        // console.log('first image url: ', this.currentTrack.artwork_url);
        this.imageSource = this.currentTrack.artwork_url;
      }
    } else {
      this.imageSource = '';
    }
  }

  toggleState() {
    // if (this.counter < 2) {
    //   this.state = this.state === "in" ? "out" : "in";
    //   this.counter++;
    // }
  }

  toggleImg() {
    // if (this.choice === 1) {
    //   this.imageSource = this.prevTrack.artwork_url;
    //   this.choice = 2;
    // } else {
    //   this.imageSource = this.currentTrack.artwork_url;
    //   this.choice = 1;
    // }
  }

  onDone($event) {
    if (this.prevTrack && this.imageSource === this.prevTrack.artwork_url) {
      this.state = 'in';
      this.imageSource = this.currentTrack.artwork_url;
    }
  }
}
