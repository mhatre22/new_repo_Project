import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdddetailsComponent } from '../../adddetails/adddetails.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StoringDataService } from 'src/app/storing-data.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-hotelregister',
  templateUrl: './hotelregister.component.html',
  styleUrls: ['./hotelregister.component.scss']
})
export class HotelregisterComponent {
  hotelForm: FormGroup;
  
  constructor(
    private builder: FormBuilder,
    private service: StoringDataService,
    private toastr : ToastrService,
    private dialog: MatDialogRef<HotelregisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    
  ){
    this.hotelForm = this.builder.group({
      name : '',
      phone : '',
      email : '',
      menu : '',
      discription : '',
      address : '',
      arooms : '',
      workers : ''
    })
  }

  ngOnInit(): void {
    this.hotelForm.patchValue(this.data)
  }

  hotelRegistr(){
    if(this.hotelForm.valid) {
      if(this.data){
        this.service.updateHotel(this.data.id, this.hotelForm.value).subscribe({
          next: (val:any) => {
            this.toastr.success('Hotel Detail Updated Successfully !!');
            this.dialog.close(true);
          },
          error: (err:any)=>{
            this.toastr.error("some error occurred")
          }
        })
      }else {
        console.log(this.hotelForm.value)
      this.service.registerHotel(this.hotelForm.value).subscribe({
        next: (val:any) => {
          this.toastr.success('Hotel Registration Successfull', "Congratulations!!");
          this.dialog.close(true);

        },
        error: (err:any)=>{
          this.toastr.error("some error occurred")
        }
      })
      }
    }
      
  }

}


 

