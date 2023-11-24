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
  passwordMismatchError :boolean =false;
constructor(private router:Router,
  private fb:FormBuilder){}
signupform!:FormGroup;
ngOnInit(){
  this.signFormControlls()
  
}

signFormControlls(){
  this.signupform=this.fb.group({
    name:['',[Validators.required,Validators.pattern("[A-aZ-s]*$")]], 
      email:['',[Validators.required, Validators.email]],
      mobNo:['',[Validators.required,Validators.pattern("[0-9]*$")]],
      username:['',[Validators.required,Validators.pattern('^[a-zA-Z@0-9-]*$')]],
      gender:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
     },{validators: this.passwordMatchValidator});
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

get confirmPasword(){
  return this.signupform.get('confirmPassword');
}
passwordMatchValidator(signupform:FormGroup){
  const password = signupform.get('password')?.value;
  const confirmPassword = signupform.get('confirmPassword')?.value;
if(password == confirmPassword){
  signupform.controls['confirmPassword'].setErrors(null);
  return null;
}else{
  signupform.controls['confirmPassword'].setErrors({'mismatch':true});
  return{'mismatch' : true}
}
}



}