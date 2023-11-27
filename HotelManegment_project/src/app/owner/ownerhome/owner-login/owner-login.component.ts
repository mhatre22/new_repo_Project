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
   
  });

}
submit(){
  this.http.get<any>("http://localhost:3000/owner").subscribe(result=>{
    const user = result.find((a:any)=>{
      return a.username === this.loginform.value.username && a.password === this.loginform.value.password ;

  });
    if(user){
      this.toaster.success( 'Login Succesful',`Welcome ${this.loginform.value.username}`);
      this.loginform.reset()
      this.router.navigateByUrl('owner/ownersucees')
    }else{
      this.toaster.warning("user not found")
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


back(){
  this.router.navigateByUrl('/owner/ownerhome');
}

}