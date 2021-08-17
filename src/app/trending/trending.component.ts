import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  showMovies: boolean = true;
  showTvShows: boolean = false;
  showActors: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
  displayMovies() {
    this.showMovies = true;
    this.showTvShows = false;
    this.showActors = false;

  }
  displayTvShows() {
    this.showMovies = false;
    this.showTvShows = true;
    this.showActors = false;
  }
  displayActors() {
    this.showMovies = false;
    this.showTvShows = false;
    this.showActors = true;
  }

}
