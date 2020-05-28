import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GymComponent} from './gym/gym.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FitnessComponent} from './fitness/fitness.component';
import {SwimmingComponent} from './swimming/swimming.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ContactusComponent} from './contactus/contactus.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'gym', component:GymComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'fitness', component:FitnessComponent},
  {path: 'swimming', component:SwimmingComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
