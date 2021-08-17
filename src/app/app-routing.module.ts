import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ActorDetailsComponent } from './trending/trending-actors/actor-details/actor-details.component';
import { MovieDetailsComponent } from './trending/trending-movies/movie-details/movie-details.component';
import { TrendingTvShowDetailsComponent } from './trending/trending-tv-shows/trending-tv-show-details/trending-tv-show-details.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "trending", component: TrendingComponent },
  { path: "moviedetails/:id", component: MovieDetailsComponent },
  { path: "trendingtvshowdetails/:id", component: TrendingTvShowDetailsComponent },
  { path: "actordetails/:id", component: ActorDetailsComponent },
  { path: "booking", component: BookingComponent },
  { path: "authentication", component: AuthenticationComponent },
  { path: "**", component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
