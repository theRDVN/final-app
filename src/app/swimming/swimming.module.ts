import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwimmingRoutingModule } from './swimming-routing.module';
import { BigPoolComponent } from './big-pool/big-pool.component';
import { SmallPoolComponent } from './small-pool/small-pool.component';
import { PoolGalleryComponent } from './pool-gallery/pool-gallery.component';

@NgModule({
  declarations: [BigPoolComponent, SmallPoolComponent, PoolGalleryComponent],
  imports: [
    CommonModule,
    SwimmingRoutingModule
  ]
})
export class SwimmingModule { }
