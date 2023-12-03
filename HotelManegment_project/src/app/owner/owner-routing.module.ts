import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerLoginComponent } from './ownerhome/owner-login/owner-login.component';
import { OwnerSignupComponent } from './ownerhome/owner-signup/owner-signup.component';
import { OwnersucessComponent } from './ownersucess/ownersucess.component';
import { HotelregisterComponent } from './ownerhome/hotelregister/hotelregister.component';
import { AddhoteldetailsComponent } from './addhoteldetails/addhoteldetails.component';
const routes: Routes = [
  {path: '', component: OwnerhomeComponent},
  {path:'ownerhome',  component: OwnerhomeComponent},
  {path:'ownerlogin', component: OwnerLoginComponent},
  {path:'ownersignup', component: OwnerSignupComponent},
  {path: 'ownersucees',component:OwnersucessComponent},
  {path:'hotelregister',component:HotelregisterComponent},
  {path:'addhoteldetails',component:AddhoteldetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
