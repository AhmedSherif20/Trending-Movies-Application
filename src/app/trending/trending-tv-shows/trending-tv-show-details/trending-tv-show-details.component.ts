import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/details.service';

@Component({
  selector: 'app-trending-tv-show-details',
  templateUrl: './trending-tv-show-details.component.html',
  styleUrls: ['./trending-tv-show-details.component.scss']
})
export class TrendingTvShowDetailsComponent implements OnInit {

  tvShowId: number = 0;
  tvShowDetails: any;
  imgPrefix: string = "https://image.tmdb.org/t/p/w500"
  constructor(private _DetailsService: DetailsService, private _ActivatedRoute: ActivatedRoute) {
    this.tvShowId = this._ActivatedRoute.snapshot.params.id
  }

  ngOnInit(): void {
    this._DetailsService.getTvShowDetails(this.tvShowId).subscribe((data: any) => {
      this.tvShowDetails = data;
      console.log(this.tvShowDetails);


    })

  }

}
