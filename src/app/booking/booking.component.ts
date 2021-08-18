import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  booked: boolean = false;
  booking: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  bookedDone() {
    this.booked = !this.booked
    this.booking = !this.booking
  }

}
