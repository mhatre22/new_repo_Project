import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.scss']
})
export class AdddetailsComponent {
constructor(private router:Router,
  private fb:FormBuilder,
  private http:HttpClient,
  private toaster: ToastrService,
  private dialog: MatDialogRef<AdddetailsComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any){}
  hoteldetailsform! :FormGroup
  submited :boolean=false;
  hotel:any;
ngOnInit(){
this.hoteldetailsform = this.fb.group({
  name:this.fb.control( '',(Validators.required)),
  email:this.fb.control('',(Validators.required)),
  phone:this.fb.control('',(Validators.required)),
  address:this.fb.control('',(Validators.required)),
  city:this.fb.control('',(Validators.required)),
  rooms:this.fb.control('',(Validators.required)),
  menu:this.fb.control('',(Validators.required)),
  workers:this.fb.control('',(Validators.required))
});
}
Submit(){
 if(this.hoteldetailsform.valid){
console.log(this.hoteldetailsform.value);
this.http.post<any>( "http://localhost:3000/hotelDetails",this.hoteldetailsform.value).subscribe(result=>{
this.hotel=result;
this.toaster.success("Hotel added Successfully !!!");
});
 }else{
  this.toaster.warning("Please Add valid data");
 }
}
onreste(){
  this.submited=false;
  this.hoteldetailsform.reset();
}

}
