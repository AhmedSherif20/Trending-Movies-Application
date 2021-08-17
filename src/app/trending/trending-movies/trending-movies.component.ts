import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/shows.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss']
})
export class TrendingMoviesComponent implements OnInit {
  allTrendingMovies: any[] = [];
  imgPrefix: string = "https://image.tmdb.org/t/p/w500"
  constructor(private _ShowsService: ShowsService) {

  }

  ngOnInit(): void {
    this._ShowsService.getTrendingShows("movie").subscribe((data: any) => {
      this.allTrendingMovies = data.results;
    })

  }

}
