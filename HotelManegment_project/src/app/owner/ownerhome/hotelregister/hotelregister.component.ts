import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StoringDataService } from 'src/app/storing-data.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddhotelComponent } from '../../addhotel/addhotel.component';


@Component({
  selector: 'app-hotelregister',
  templateUrl: './hotelregister.component.html',
  styleUrls: ['./hotelregister.component.scss']
})
export class HotelregisterComponent {
constructor(private dailog:Dialog,
  private router:Router){}

  addhoteldetails(){
    this.dailog.open(AddhotelComponent);
  }   


}

