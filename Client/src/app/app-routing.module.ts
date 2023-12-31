import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { IdentifyComponent } from './Pages/identify/identify.component';
import { SkylightCalComponent } from './Pages/skylight-cal/skylight-cal.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { IdentifycurbComponent } from './Components/identifycurb/identifycurb.component';
import { IdentifyselfflashComponent } from './Components/identifyselfflash/identifyselfflash.component';
import { IdentifydeckComponent } from './Components/identifydeck/identifydeck.component';
import { SelfcalComponent } from './Components/selfcal/selfcal.component';
import { CurbcalComponent } from './Components/curbcal/curbcal.component';
import { DeckcalComponent } from './Components/deckcal/deckcal.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  {path:'identify', component: IdentifyComponent},
  {path:'skylightcal', component: SkylightCalComponent},
  {path:'contact', component:ContactComponent},
  {path:'curbmount', component:IdentifycurbComponent},
  {path:'selfflash', component: IdentifyselfflashComponent},
  {path:'deck', component:IdentifydeckComponent},
  {path:'selfcal', component:SelfcalComponent},
  {path:'deckcal', component:DeckcalComponent},
  {path:'curbcal', component:CurbcalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
