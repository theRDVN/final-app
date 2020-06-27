import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {SwimmingRoutingModule} from './swimming/swimming-routing.module';
import {GymRoutingModule} from './gym/gym-routing.module';
import {FitnessRoutingModule} from './fitness/fitness-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SwimmingComponent } from './swimming/swimming.component';
import { FitnessComponent } from './fitness/fitness.component';
import { GymComponent } from './gym/gym.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProfileComponent } from './profile/profile.component';

import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocalStorageModule} from 'angular-2-local-storage';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { authInterceptorProviders } from './_helper/auth.interceptor';
import {CommonModule} from "@angular/common";

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
    ProfileComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModalModule,
    SwimmingRoutingModule,
    GymRoutingModule,
    FitnessRoutingModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LocalStorageModule.forRoot({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    FormsModule,

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
