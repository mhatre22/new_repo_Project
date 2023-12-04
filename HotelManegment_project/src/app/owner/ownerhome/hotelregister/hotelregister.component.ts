import { Dialog} from '@angular/cdk/dialog';
import { Component, Inject} from '@angular/core';

import { Router } from '@angular/router';
import { OwneraddhotelComponent } from '../owneraddhotel/owneraddhotel.component';




@Component({
  selector: 'app-hotelregister',
  templateUrl: './hotelregister.component.html',
  styleUrls: ['./hotelregister.component.scss']
})
export class HotelregisterComponent {
constructor(private dailog:Dialog,
  private router:Router){}
  ownerhotelregister(){
    this.dailog.open(OwneraddhotelComponent)
  }

}

