import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerSignupComponent } from './ownerhome/owner-signup/owner-signup.component';
import { OwnerLoginComponent } from './ownerhome/owner-login/owner-login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from './ownerhome/owner-login/common/shared/shared.module';
import { OwnersucessComponent } from './ownersucess/ownersucess.component';
import { HotelregisterComponent } from './ownerhome/hotelregister/hotelregister.component';






@NgModule({
  declarations: [
    OwnerhomeComponent,
    OwnerSignupComponent,
    OwnerLoginComponent,
    OwnersucessComponent,
    HotelregisterComponent,
  
  
  
   
  
   
  
  ],
  
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  
    
  ]
})
export class OwnerModule {
  
}
 
