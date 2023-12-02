import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HotelregisterComponent } from './hotelregister/hotelregister.component';
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
   getHotelList(){
    this.http.get("http://localhost:3000/hotelDetails").subscribe(result=>{
      this.result=result;
    })
   
    }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
deleteHotel(id:any){
  this.http.delete("http://localhost:3000/hotelDetails",id).subscribe(result=>{
this.delete= result;
    this.toaster.success("Hotel Delete Successfully !!!");
  })

}
openHotelForm(data:any){
  const dailogRef =this.dialog.open(HotelregisterComponent,{
data,
  });
  dailogRef.afterClosed().subscribe(result=>{
this.getHotelList();
  })

}
}
