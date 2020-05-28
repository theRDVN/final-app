import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SwimmingComponent } from './swimming/swimming.component';
import { FitnessComponent } from './fitness/fitness.component';
import { GymComponent } from './gym/gym.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SwimmingRoutingModule} from './swimming/swimming-routing.module';
import {GymRoutingModule} from './gym/gym-routing.module';
import {FitnessRoutingModule} from './fitness/fitness-routing.module';
import { ContactusComponent } from './contactus/contactus.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainMenuComponent,
    SwimmingComponent,
    FitnessComponent,
    GymComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    NgbModalModule,
    SwimmingRoutingModule,
    GymRoutingModule,
    FitnessRoutingModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
