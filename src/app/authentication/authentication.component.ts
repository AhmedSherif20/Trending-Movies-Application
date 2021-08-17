import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {


  constructor(public _NavbarService: NavbarService, public _AuthenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this._NavbarService.hide()


  }


}
