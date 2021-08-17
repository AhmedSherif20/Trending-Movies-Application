import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private _HttpClient: HttpClient) { }
  getMovieDetails(id: number): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ae8bbbe4876db0a6fa719dfc3629fff4`)
  }
  getTvShowDetails(id: number): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=ae8bbbe4876db0a6fa719dfc3629fff4`)
  }
  getActorDetails(id: number): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=ae8bbbe4876db0a6fa719dfc3629fff4`)
  }
}

