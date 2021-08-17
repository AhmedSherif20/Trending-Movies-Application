import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/shows.service';
ShowsService
@Component({
  selector: 'app-trending-tv-shows',
  templateUrl: './trending-tv-shows.component.html',
  styleUrls: ['./trending-tv-shows.component.scss']
})
export class TrendingTvShowsComponent implements OnInit {
  allTrendingTvShows: any[] = [];
  imgPrefix: string = "https://image.tmdb.org/t/p/w500"
  constructor(private _ShowsService: ShowsService) { }

  ngOnInit(): void {
    this._ShowsService.getTrendingShows("tv").subscribe((data: any) => {
      this.allTrendingTvShows = data.results;
    })
  }

}
