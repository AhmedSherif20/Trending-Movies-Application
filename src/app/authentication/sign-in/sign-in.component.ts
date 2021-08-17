import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public _AuthenticationService: AuthenticationService) { }

  ngOnInit(): void {
    console.log(this._AuthenticationService.signInShow);

  }
  goSignUp() {
    this._AuthenticationService.signInShow = !this._AuthenticationService.signInShow
    this._AuthenticationService.signUpShow = !this._AuthenticationService.signUpShow
  }
  goPasswordForget() {
    this._AuthenticationService.signInShow = !this._AuthenticationService.signInShow
    this._AuthenticationService.forgetPasswordShow = !this._AuthenticationService.forgetPasswordShow
  }

}
