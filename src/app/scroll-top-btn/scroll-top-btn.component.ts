import { HostListener, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-top-btn',
  templateUrl: './scroll-top-btn.component.html',
  styleUrls: ['./scroll-top-btn.component.scss']
})
export class ScrollTopBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @HostListener('window:scroll')
  onWindowScroll() {
    let scrollBtn = document.querySelector(".scroll-btn")
    let showBtn = window.scrollY;
    if (showBtn > 1200) {
      scrollBtn?.classList.add("scroll-btn-show")
    } else {
      scrollBtn?.classList.remove("scroll-btn-show")
    }
  }

  scrollTop() {
    window.scrollTo(0, 0)
  }
}
