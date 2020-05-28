import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BigPoolComponent} from './big-pool/big-pool.component';
import {SmallPoolComponent} from './small-pool/small-pool.component';
import {PoolGalleryComponent} from './pool-gallery/pool-gallery.component';

const swimmingRoutes: Routes = [
  {path: 'swimming/bigpool', component:BigPoolComponent},
  {path: 'swimming/smallpool', component:SmallPoolComponent},
  {path: 'swimming/poolgallery', component:PoolGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(swimmingRoutes)],
  exports: [RouterModule]
})
export class SwimmingRoutingModule { }
