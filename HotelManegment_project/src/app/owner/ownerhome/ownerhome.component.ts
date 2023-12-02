import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {
  displayedColumns :string[]=[
    'name',
    'email',
    'menu',
    'address',
    'rooms',
    'workers',
    'action'
  ]
  hoteldetailsform!:FormGroup;
  delete:any;
  dataSource!:MatTableDataSource<any>
  @ViewChild(MatPaginator) pagintor!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  constructor(private router:Router,
    private http:HttpClient,
    private toaster:ToastrService,
    private dialog:MatDialog){}
    result:any;
  login(){
    this.router.navigateByUrl('owner/ownerlogin');
  }
  back(){
    this.router.navigateByUrl('home');
   }

}
