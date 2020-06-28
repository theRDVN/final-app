import {BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymRoutingModule } from './gym-routing.module';
import {BigGymComponent} from "./big-gym/big-gym.component";
import {SmallGymComponent} from "./small-gym/small-gym.component";
import {MediumGymComponent} from "./medium-gym/medium-gym.component";
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [BigGymComponent, SmallGymComponent, MediumGymComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbButtonsModule,
    GymRoutingModule,
    MatDatepickerModule,
  ]
})
export class GymModule { }
