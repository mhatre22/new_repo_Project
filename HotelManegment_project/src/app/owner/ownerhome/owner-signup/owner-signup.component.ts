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
  showPassword: boolean =true;
  showconfirmPassword: boolean=false;
constructor(private router:Router,
  private fb:FormBuilder){}
signupform!:FormGroup;

ngOnInit(){
  this.signupform=this.fb.group({
 name:['',[Validators.required,Validators.pattern("[A-aZ-s]*$")]], 
   email:['',[Validators.required, Validators.email]],
   mobNo:['',[Validators.required,Validators.pattern("[0-9]*$"),Validators.minLength(10)],Validators.maxLength(10)],
   username:['',[Validators.required]],
   gender:['',[Validators.required]],
   password:['',[Validators.required]],
   confirmPassword:['',[Validators.required]],
  
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
passwordvisiblity(){
  this.showPassword = ! this.showPassword
}
confirmpasswordvisiblity(){
  this.showconfirmPassword = !this.showconfirmPassword
}


}
