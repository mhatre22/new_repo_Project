import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {
  constructor(private router:Router){}
  search! : string
  login(){
    this.router.navigateByUrl('owner/ownerlogin');
  }
  back(){
    this.router.navigateByUrl('home');
   }
  
}
