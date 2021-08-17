import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SmallPlansComponent } from './home/small-plans/small-plans.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaComponent } from './footer/social-media/social-media.component';
import { ScrollTopBtnComponent } from './scroll-top-btn/scroll-top-btn.component';
import { TrendingComponent } from './trending/trending.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookingComponent } from './booking/booking.component';
import { TrendingMoviesComponent } from './trending/trending-movies/trending-movies.component';
import { TrendingTvShowsComponent } from './trending/trending-tv-shows/trending-tv-shows.component';
import { TrendingActorsComponent } from './trending/trending-actors/trending-actors.component';
import { MovieDetailsComponent } from './trending/trending-movies/movie-details/movie-details.component';
import { TrendingTvShowDetailsComponent } from './trending/trending-tv-shows/trending-tv-show-details/trending-tv-show-details.component';
import { ActorDetailsComponent } from './trending/trending-actors/actor-details/actor-details.component';
import { AboutComponent } from './about/about.component';
import { NavbarService } from './navbar.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SmallPlansComponent,
    FooterComponent,
    SocialMediaComponent,
    ScrollTopBtnComponent,
    TrendingComponent,
    NotfoundComponent,
    BookingComponent,
    TrendingMoviesComponent,
    TrendingTvShowsComponent,
    TrendingActorsComponent,
    MovieDetailsComponent,
    TrendingTvShowDetailsComponent,
    ActorDetailsComponent,
    AboutComponent,
    AuthenticationComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
