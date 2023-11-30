import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.scss']
})
export class AdddetailsComponent {
constructor(private router:Router,
  private fb:FormBuilder){}
hoteldetails! :FormGroup
ngOnInit(){
this.hoteldetail
}
hoteldetail(){
this.hoteldetails = this.fb.group({
  name:this.fb.control(Validators.required),
  email:this.fb.control(Validators.required),
  phone:this.fb.control(Validators.required),
  address:this.fb.control(Validators.required),
  city:this.fb.control(Validators.required),
  rooms:this.fb.control(Validators.required),
  gender:this.fb.control(Validators.required)

})
}
}
