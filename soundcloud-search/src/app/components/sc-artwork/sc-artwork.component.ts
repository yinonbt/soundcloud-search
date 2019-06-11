import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Track } from "src/app/models/track";

@Component({
  selector: "app-sc-artwork",
  templateUrl: "./sc-artwork.component.html",
  styleUrls: ["./sc-artwork.component.scss"]
})
export class ScArtworkComponent implements OnInit, OnChanges {  
  @Input() selectedTrack: Track;
  prevTrack: Track;
  currentTrack: Track;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.prevTrack = this.currentTrack;
    this.currentTrack = this.selectedTrack;
  }
}
