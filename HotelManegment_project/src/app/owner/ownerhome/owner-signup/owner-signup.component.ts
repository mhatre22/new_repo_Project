import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StoringDataService } from 'src/app/storing-data.service';

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
  private fb:FormBuilder,
  private storingdataservice :StoringDataService,
  private toastr :ToastrService

 ){}
signupform!:FormGroup;
data : any;
signupForm : any;
endpoint : any;
ngOnInit(){
  this.signFormControlls()
  
}

signFormControlls(){
  this.signupform=this.fb.group({
    name:['',[Validators.required,Validators.pattern( /^[a-zA-Z\s]*$/)]], 
      email:['',[Validators.required, Validators.email]],
      mobNo:['',[Validators.required,Validators.pattern("[0-9]*$")]],
      username:['',[Validators.required,Validators.pattern('^[a-zA-Z@0-9-]*$')]],
      gender:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
     },{validators: this.passwordMatchValidator});
}

  submit(formData :any){
    console.log(formData)
    if(this.signupform.valid){
      this.storingdataservice.postApicall(this.signupform.value).subscribe(res=>{
      this.toastr.success("SignUp Sucessfully !!!!");
      })
    }else{
      this.toastr.warning("Enter valid data");
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

