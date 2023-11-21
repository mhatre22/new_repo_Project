import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.scss']
})
export class OwnerSignupComponent {
submitted: boolean=false;
constructor(private router:Router,
  private fb:FormBuilder){}
signupform!:FormGroup;
hide = true;

ngOnInit(){
  this.signupform=this.fb.group({
   name:['',[Validators.required]] ,
   email:['',[Validators.required]],
   mobNo:['',[Validators.required]],
   userName:['',[Validators.required]],
   gender:['',[Validators.required]],
   password:['',[Validators.required]],
   confirmpassword:['',[Validators.required]],
  
  })
}
submit(formData:any){
  console.log(formData);
  this.submitted=true;
  if(this.signupform.valid){
    return;
  }
  const myTimeout = setTimeout(signupform, 0.5000);

  function signupform() {
    alert('Succesfully Signup!!!!') ;
  
  }
  this.router.navigateByUrl('/owner/ownerlogin');
}
Onreset(){
this.submitted=false;
this.signupform.reset()
}




}
