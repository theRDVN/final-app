import {BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwimmingRoutingModule } from './swimming-routing.module';
import { BigPoolComponent } from './big-pool/big-pool.component';
import { SmallPoolComponent } from './small-pool/small-pool.component';
import { PoolGalleryComponent } from './pool-gallery/pool-gallery.component';
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [BigPoolComponent, SmallPoolComponent, PoolGalleryComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbButtonsModule,
    SwimmingRoutingModule,
  ],
})
export class SwimmingModule { }
