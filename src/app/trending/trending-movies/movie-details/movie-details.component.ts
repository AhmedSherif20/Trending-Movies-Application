import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/details.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId: number = 0;
  movieDetails: any;
  imgPrefix: string = "https://image.tmdb.org/t/p/w500"
  constructor(private _DetailsService: DetailsService, private _ActivatedRoute: ActivatedRoute) {
    this.movieId = this._ActivatedRoute.snapshot.params.id
  }

  ngOnInit(): void {
    this._DetailsService.getMovieDetails(this.movieId).subscribe((data: any) => {
      this.movieDetails = data;
      console.log(this.movieDetails);


    })

  }

}
