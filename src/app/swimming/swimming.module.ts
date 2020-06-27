import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwimmingRoutingModule } from './swimming-routing.module';
import { BigPoolComponent } from './big-pool/big-pool.component';
import { SmallPoolComponent } from './small-pool/small-pool.component';
import { PoolGalleryComponent } from './pool-gallery/pool-gallery.component';
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [BigPoolComponent, SmallPoolComponent, PoolGalleryComponent],
  imports: [
    SwimmingRoutingModule,
    CommonModule,
    NgbButtonsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SwimmingModule { }
