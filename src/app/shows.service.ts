import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private _HttpClient: HttpClient) { }
  getTrendingShows(trendType: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${trendType}/day?api_key=ae8bbbe4876db0a6fa719dfc3629fff4`)
  }

}