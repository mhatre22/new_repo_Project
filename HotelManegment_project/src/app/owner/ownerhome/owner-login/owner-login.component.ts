import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';


@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.scss']
})
export class OwnerLoginComponent {
  showPassword: boolean =false;
  showconfirmPassword: boolean =false;
  passwordMismatchError : boolean =false;
constructor(private route:Router,
  private commonservice : CommonService,
  private fb:FormBuilder){}
  loginform! : FormGroup
ngOnInit(){
  this.loginform = this.fb.group({
    userName:['',[Validators.required]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]]
  },{validators : this.passwordMatchValidator});
  
}
submit(formData:any){
console.log(formData);
this.route.navigateByUrl('/owner/ownersucees');
}

signup(){
  this.route.navigateByUrl('owner/ownersignup');
}
passwordvisiblity(){
  this.showPassword =!this.showPassword;
}
confirmpasswordvisiblity(){
  this.showconfirmPassword = !this.showconfirmPassword;
}
get password(){
  return this.loginform.get('password');
}
get confirmPasword(){
  return this.loginform.get('confirmPassword');
}
passwordMatchValidator(loginform:FormGroup){
  const password = loginform.get('password')?.value;
  const confirmPassword = loginform.get('confirmPassword')?.value;
if(password == confirmPassword){
  loginform.controls['confirmPassword'].setErrors(null);
  return null;
}else{
  loginform.controls['confirmPassword'].setErrors({'mismatch':true});
  return{'mismatch' : true}
}

}
back(){
  this.route.navigateByUrl('/owner/ownerhome');
}

}

