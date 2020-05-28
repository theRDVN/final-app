import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FFloorFitComponent} from './f-floor-fit/f-floor-fit.component';
import {SFloorFitComponent} from './s-floor-fit/s-floor-fit.component';
import {FitnessGalleryComponent} from './fitness-gallery/fitness-gallery.component';

const routes: Routes = [
  {path: 'ffloorfit', component:FFloorFitComponent},
  {path: 'sfloorfit', component:SFloorFitComponent},
  {path: 'fitnessgallery', component:FitnessGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitnessRoutingModule { }
