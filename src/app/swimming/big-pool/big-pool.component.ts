import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../_services/reservation.service";

@Component({
  selector: 'app-big-pool',
  templateUrl: './big-pool.component.html',
  styleUrls: ['./big-pool.component.scss']
})
export class BigPoolComponent implements OnInit {

  reservation = {
    reservation_id: "",
    user_id: "",
    places_id: "",
    timeFrom: "",
    timeTo: "",
    amount: ""
  };
  submitted = false;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  submit() {
    const data = {
      reservation_id: this.reservation.reservation_id,
      user_id: this.reservation.user_id,
      places_id: this.reservation.places_id,
      timeFrom: this.reservation.timeFrom,
      timeTo: this.reservation.timeTo,
      amount: this.reservation.amount
    };

    this.reservationService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    },
      error => {
      console.log(error);
      });
  }

}
