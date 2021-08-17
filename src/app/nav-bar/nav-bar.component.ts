import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
NavbarService
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public _NavbarService: NavbarService) { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll")
  navShow() {
    let navBar = document.querySelector("nav")
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 1200) {
      navBar?.classList.add("nav-show")
    } else {
      navBar?.classList.remove("nav-show")
    }
  }

  addActiveClass(event: any) {
    let navLinks = document.querySelectorAll(".nav-link")
    for (let i = 0; i < navLinks.length; i++) { navLinks[i].classList.remove("active") }
    event.target.classList.add("active")
    window.scrollTo(0, 0)
  }
  scrollTop() {
    window.scrollTo(0, 0)
  }

}
