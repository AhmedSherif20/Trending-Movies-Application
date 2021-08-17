import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  signInShow: boolean = true;
  signUpShow: boolean = false;
  forgetPasswordShow: boolean = false;

  constructor() { }

}
