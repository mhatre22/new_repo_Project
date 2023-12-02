import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AdddetailsComponent } from '../../adddetails/adddetails.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hotelregister',
  templateUrl: './hotelregister.component.html',
  styleUrls: ['./hotelregister.component.scss']
})
export class HotelregisterComponent {
constructor(private router:Router,
  private dailog:Dialog,
  private fb:FormBuilder,
  private http:HttpClient,
  private dialog: MatDialogRef<HotelregisterComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any){}
  addhoteldetails(){
  this.dailog.open(AdddetailsComponent)
  }

}
