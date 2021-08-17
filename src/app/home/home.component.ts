import { HostListener, Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { ShowsService } from '../shows.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingperson: any[] = [];
  imgPrefix: string = "https://image.tmdb.org/t/p/w500"
  constructor(private _ShowsService: ShowsService, public _Navbar: NavbarService) {

    _ShowsService.getTrendingShows("movie").subscribe((e: any) => {
      this.trendingMovies = e.results.slice(2, 6);
    })
    _ShowsService.getTrendingShows("tv").subscribe((e: any) => {
      this.trendingTv = e.results.slice(2, 6);
    })
    _ShowsService.getTrendingShows("person").subscribe((e: any) => {
      // use this code if api don't have photo cover
      // this.trendingperson = e.results.slice(0, 1).concat(e.results.slice(4, 5)).concat(e.results.slice(7, 8)).concat(e.results.slice(14, 15));
      this.trendingperson = e.results.slice(0, 4)
    })
  }

  ngOnInit(): void {
    this._Navbar.show()
  }
  getStartedBtn() {
    document.querySelector("#trendingMovies")?.scrollIntoView();
  }


}
