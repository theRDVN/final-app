import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessRoutingModule } from './fitness-routing.module';
import {FFloorFitComponent} from "./f-floor-fit/f-floor-fit.component";
import {SFloorFitComponent} from "./s-floor-fit/s-floor-fit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
  declarations: [FFloorFitComponent, SFloorFitComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbButtonsModule,
    FitnessRoutingModule,
    MatDatepickerModule,
  ]
})
export class FitnessModule { }
