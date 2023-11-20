import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerLoginComponent } from './ownerhome/owner-login/owner-login.component';
import { OwnerSignupComponent } from './ownerhome/owner-signup/owner-signup.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {path: '', component: OwnerhomeComponent},
  {path:'ownerlogin',component:OwnerLoginComponent},
  {path:'ownersignup',component:OwnerSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
