import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.scss']
})
export class OwnerSignupComponent {
constructor(private router:Router,
  private fb:FormBuilder){}
signup!:FormGroup;
ngOnInit(){
  this.signup=this.fb.group({
   name:['',[Validators.required]] ,
   email:['',[Validators.required]],
   mobNo:['',[Validators.required]],
   userName:['',[Validators.required]],
   gender:['',[Validators.required]],
   password:['',[Validators.required]],
   confirmpassword:['',[Validators.required]],
   birthdate:['',[Validators.required]]
  })
}
hide = true;



}
