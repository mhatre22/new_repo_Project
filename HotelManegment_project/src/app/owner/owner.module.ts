import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerSignupComponent } from './ownerhome/owner-signup/owner-signup.component';
import { OwnerLoginComponent } from './ownerhome/owner-login/owner-login.component';


@NgModule({
  declarations: [
    OwnerhomeComponent,
    OwnerSignupComponent,
    OwnerLoginComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
