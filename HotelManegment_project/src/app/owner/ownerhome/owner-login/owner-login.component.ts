import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { StoringDataService } from 'src/app/storing-data.service';


@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.scss']
})
export class OwnerLoginComponent {
  showPassword: boolean =false;
  showconfirmPassword: boolean =false;
  passwordMismatchError : boolean =false;
  result: any;

constructor(private router:Router,
  private http :HttpClient,
  private toaster :ToastrService,
  private fb:FormBuilder,
  private storingdataservice :StoringDataService){}
  loginform! : FormGroup

  loginresult : any ;
ngOnInit() : void{

  this.loginform = this.fb.group ({
    username: this.fb.control('',(Validators.required)),
    password: this.fb.control('',(Validators.required)),
    confirmPassword: this.fb.control('',(Validators.required)),
   
  },{validators : this.passwordMatchValidator});
  
}
submit(formData:any){
console.log(formData);
this.storingdataservice.getApicall(this.loginform.value).subscribe(res=>{
  const user = res;find((x:any)=>{
    return x.username ===this.loginform.value.username && x.password === this.loginform.value.password && x.confirmPassword === this.loginform.value.confirmPassword
  });
  if (user !=null){
    this.toaster.success('Login sucessfully')
    this.router.navigateByUrl('/owner/ownersucees')
  }else{
    this.toaster.warning('user not found');
  }
})


}
signup(){
  this.router.navigateByUrl('/owner/ownersignup');
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
  this.router.navigateByUrl('/owner/ownerhome');
}


}
function find(arg0: (x: any) => boolean) {
  throw new Error('Function not implemented.');
}

