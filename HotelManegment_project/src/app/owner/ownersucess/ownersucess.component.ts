import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownersucess',
  templateUrl: './ownersucess.component.html',
  styleUrls: ['./ownersucess.component.scss']
})
export class OwnersucessComponent {
constructor (private route: Router){}

hotelregister(){
this.route.navigateByUrl('owner/hotelregister');
}











}
