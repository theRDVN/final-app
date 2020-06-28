import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../_services/reservation.service";
import {UserService} from "../../_services/user.service";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-f-floor-fit',
  templateUrl: './f-floor-fit.component.html',
  styleUrls: ['./f-floor-fit.component.scss']
})
export class FFloorFitComponent implements OnInit {

  reservation = {
    user_id: "",
    timeFrom: this.formatDate(new Date()),
    amount: "",
  };
  submitted = false;

  reservations = [];

  constructor(private reservationService: ReservationService, private userService: UserService,private tokenStorage: TokenStorageService) {
    this.getReservations();
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.tokenStorage.getUser().roles.indexOf("ROLE_COACH")  < 0 ) {
      return;
    }

    let tempDate = new Date(this.reservation.timeFrom);
    tempDate.setHours(tempDate.getHours() + 1);
    const data = {
      user_id: this.tokenStorage.getUser().id,
      places_id: 1,
      timeFrom: this.reservation.timeFrom + ':00',
      timeTo: this.formatDate(tempDate),
      amount: this.reservation.amount,
    };

    this.reservationService.create(data.toString()).subscribe(response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }


  getReservations() {
    let dateFrom = this.formatDate(new Date(), true);

    let tempDate = new Date();
    tempDate.setDate(new Date().getDate() + 1);
    let dateTo = this.formatDate(tempDate, true);

    //TOTO ti vrati iba za dnesni den! viac ako nic
    //Dbo by ti malo vratit array:
    // [{from: 2020-06-12 12:00, to: 2020-06-12 13:00, amount: 4}]

    var resultsFromAPI = [];

    let tempStates = [];

    tempDate = new Date();
    tempDate.setHours(8);

    for (let i = 0; i < 20 - 8; i++) {
      tempDate.setHours(8 + i);
      let from = this.formatDate(tempDate);
      tempDate.setHours(9 + i);
      let to = this.formatDate(tempDate);
      let exactMatchFromAPI = resultsFromAPI.find(a => a.from == from && a.to == to);
      if (exactMatchFromAPI != null) {
        tempStates.push(exactMatchFromAPI);
      }
      else {
        tempStates.push({
          from: from,
          to: to,
          amount: 0
        });
      }
    }

    this.reservations = tempStates;

  }

  formatDate(date, emptyhours = false): string {
    if (emptyhours) {
      return date.getFullYear()
        + '-' + this.leftpad(date.getMonth() + 1, 2)
        + '-' + this.leftpad(date.getDate(), 2)
        + ' 00:00';
    }

    return date.getFullYear()
      + '-' + this.leftpad(date.getMonth() + 1, 2)
      + '-' + this.leftpad(date.getDate(), 2)
      + ' ' + this.leftpad(date.getHours(), 2)
      + ':00';
  }

  leftpad(val, resultLength = 2, leftpadChar = '0'): string {
    return (String(leftpadChar).repeat(resultLength)
      + String(val)).slice(String(val).length);
  }

}
