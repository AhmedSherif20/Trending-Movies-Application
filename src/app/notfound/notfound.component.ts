import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(public _NavbarService: NavbarService) { }

  ngOnInit(): void {
    this._NavbarService.hide()
  }

}
