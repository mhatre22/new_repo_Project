import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from './common/commonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor(private route:Router,
    private commonservice :CommonserviceService){}
    journey(journey:string){
  if(journey === 'admin'){
    this.commonservice.journey ='admin';
    this.route.navigateByUrl('admin');
  }
 else if(journey ==='owner'){
  this.commonservice.journey = 'owner';
this.route.navigateByUrl('owner');
 }

 else(journey ==='user');{
  this.commonservice.journey ='user';
this.route.navigateByUrl('user');
 }
 }


}
