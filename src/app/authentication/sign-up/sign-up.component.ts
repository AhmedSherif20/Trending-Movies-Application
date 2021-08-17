import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public _AuthenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  goSignIn() {
    this._AuthenticationService.signInShow = !this._AuthenticationService.signInShow
    this._AuthenticationService.signUpShow = !this._AuthenticationService.signUpShow
  }

}
