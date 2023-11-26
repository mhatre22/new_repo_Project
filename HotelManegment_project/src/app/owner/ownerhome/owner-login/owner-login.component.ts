import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common.service';
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
  private commonservice : CommonService,
  private toaster :ToastrService,
  private fb:FormBuilder,
  private storingdataservice :StoringDataService){}
  loginform! : FormGroup

  loginresult : any ;
ngOnInit(){

  this.loginform = this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
   

  },{validators : this.passwordMatchValidator});
  
}

submit(formData:any){
console.log(formData);

if (this.loginform.valid){
  this.storingdataservice.getOwnerById(this.loginform.value.id).subscribe(res=>{
    this.loginresult = res ;
    this.toaster.success(`welcome ${this.result.id}`,'Login Successfully !!')
    this.router.navigateByUrl('/owner/ownersucees');
    
  });
   if(this.result.password === this.loginform.value.password){
    sessionStorage.setItem('username', this.result.id);
    sessionStorage.setItem('password', this.result.password);
    sessionStorage.setItem('confirmPassword', this.result.confirmPassword);
   }else{
    this.toaster.error('Invalid Password')
   }
  }else{
    this.toaster.warning('Please enter valid data.')
   }
}
signup(){
  this.router.navigateByUrl('owner/ownersignup');
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


