import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { SocialComponent } from './social/social.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { ConnectComponent } from './connect/connect.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CommunityComponent,
    RaiseticketComponent,
    SocialComponent,
    AmenitiesComponent,
    ConnectComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
