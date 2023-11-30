import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdddetailsComponent } from '../../adddetails/adddetails.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-hotelregister',
  templateUrl: './hotelregister.component.html',
  styleUrls: ['./hotelregister.component.scss']
})
export class HotelregisterComponent {
constructor(private dailog :MatDialog,
  private router:Router){}
  addDetailhotel(){
this.dailog.open(AdddetailsComponent)
  }
back(){
this.router.navigateByUrl('/owner/ownerlogin');
}

  }





