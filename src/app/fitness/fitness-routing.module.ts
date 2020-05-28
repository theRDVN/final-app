import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FFloorFitComponent} from './f-floor-fit/f-floor-fit.component';
import {SFloorFitComponent} from './s-floor-fit/s-floor-fit.component';
import {FitnessGalleryComponent} from './fitness-gallery/fitness-gallery.component';

const routes: Routes = [
  {path: 'fitness/ffloorfit', component:FFloorFitComponent},
  {path: 'fitness/sfloorfit', component:SFloorFitComponent},
  {path: 'fitness/fitnessgallery', component:FitnessGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitnessRoutingModule { }
