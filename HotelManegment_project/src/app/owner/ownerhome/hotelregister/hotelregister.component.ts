import { Component, Inject, Input } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdddetailsComponent } from '../../adddetails/adddetails.component';

@Component({
selector: 'app-hotelregister',
  templateUrl:'./hotelregister.component.html',
  styleUrls: ['./hotelregister.component.']
})
export class HotelregisterComponent {
constructor(private dailog :MatDialog,
  private router:Router,
  private http :HttpClient){}


  addDetailhotel(){
this.dailog.open(AdddetailsComponent)
  }
back(){
this.router.navigateByUrl('/owner/ownerlogin');
}

  }



