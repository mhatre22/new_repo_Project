import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoringDataService } from 'src/app/storing-data.service';

@Component({
  selector: 'app-ownersucess',
  templateUrl: './ownersucess.component.html',
  styleUrls: ['./ownersucess.component.scss']
})

export class OwnersucessComponent {
  userName!: string;
constructor (private route: Router,
  private storingdataservice: StoringDataService){}
hotelregister(){
this.route.navigateByUrl('owner/hotelregister');

}
ngOnInit(){
 this.userName = this.storingdataservice.Usernamefront ;
  }
}


