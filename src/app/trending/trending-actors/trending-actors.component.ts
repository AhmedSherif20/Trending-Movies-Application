import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/shows.service';

@Component({
  selector: 'app-trending-actors',
  templateUrl: './trending-actors.component.html',
  styleUrls: ['./trending-actors.component.scss']
})
export class TrendingActorsComponent implements OnInit {
  allTrendingActors: any[] = [];
  imgPrefix: string = "https://image.tmdb.org/t/p/w500"
  constructor(private _ShowsService: ShowsService) { }

  ngOnInit(): void {
    this._ShowsService.getTrendingShows("person").subscribe((data: any) => {
      this.allTrendingActors = data.results;
    })
  }

}
