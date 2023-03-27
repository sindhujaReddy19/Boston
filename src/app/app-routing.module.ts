import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmenitiesComponent } from './amenities/amenities.component';
import { CommunityComponent } from './community/community.component';
import { ConnectComponent } from './connect/connect.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:NavComponent,
  children:[
    {path:'home',component:HomeComponent},
    {path:'connect',component:ConnectComponent},
    {path:'community',component:CommunityComponent},
    {path:'raiseticket',component:RaiseticketComponent},
    {path:'amenities',component:AmenitiesComponent},
    {path:'social',component:SocialComponent}
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
