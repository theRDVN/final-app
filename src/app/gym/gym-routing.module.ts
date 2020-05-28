import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BigGymComponent} from './big-gym/big-gym.component';
import {MediumGymComponent} from './medium-gym/medium-gym.component';
import {SmallGymComponent} from './small-gym/small-gym.component';
import {GymGalleryComponent} from './gym-gallery/gym-gallery.component';

const routes: Routes = [
  {path: 'biggym', component:BigGymComponent},
  {path: 'mediumgym', component:MediumGymComponent},
  {path: 'smallgym', component:SmallGymComponent},
  {path: 'gymgallery', component:GymGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymRoutingModule { }
