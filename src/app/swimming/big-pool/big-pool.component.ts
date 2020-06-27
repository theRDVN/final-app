import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../_services/reservation.service";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-big-pool',
  templateUrl: './big-pool.component.html',
  styleUrls: ['./big-pool.component.scss'],
})
export class BigPoolComponent implements OnInit {

  reservation = {
    user_id: "",
    places_id: "",
    timeFrom: "",
    timeTo: "",
    amount: "",
  };
  submitted = false;

  constructor(private reservationService: ReservationService, private userService: UserService) { }

  ngOnInit(): void {
  }

  submit() {
    const data = {
      user_id: this.userService.getUserId(),
      places_id: 1,
      timeFrom: this.reservation.timeFrom,
      timeTo: this.reservation.timeTo,
      amount: this.reservation.amount,
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
