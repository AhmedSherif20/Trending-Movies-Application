import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  subscribeSteps = [
    { id: "01", step: "Choose your Plan", desc: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining" },
    { id: "02", step: "Create an account", desc: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first" },
    { id: "03", step: "Enjoy FlixTV", desc: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting" },
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
