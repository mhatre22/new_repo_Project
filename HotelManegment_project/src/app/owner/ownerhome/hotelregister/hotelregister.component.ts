import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdddetailsComponent } from '../../adddetails/adddetails.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-hotelregister',
  templateUrl: './hotelregister.component.html',
  styleUrls: ['./hotelregister.component.scss']
})
export class HotelregisterComponent {
  displayedColumns: string[] = ['id','name','time','email','phone','city','rooms','menu','workers'];
  dataSource!: MatTableDataSource<HotelregisterComponent>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(private router:Router,
  private dailog:Dialog,
  private fb:FormBuilder,
  private http:HttpClient,

){}
hotelregister!:FormGroup;
getHotel:any;
 ngOnInit(){
  this.hotelregister = this.fb.group({
    id:this.fb.control( '',(Validators.required)),
  name:this.fb.control( '',(Validators.required)),
  time:this.fb.control( '',(Validators.required)),
  email:this.fb.control('',(Validators.required)),
  phone:this.fb.control('',(Validators.required)),
  address:this.fb.control('',(Validators.required)),
  city:this.fb.control('',(Validators.required)),
  rooms:this.fb.control('',(Validators.required)),
  menu:this.fb.control('',(Validators.required)),
  workers:this.fb.control('',(Validators.required))
  })
 }
  addhoteldetails(){
  this.dailog.open(AdddetailsComponent)
  }
  hoteldetail:string[] =[
    'id',
    'name',
    'time',
    'email',
    'phone',
    'city',
    'rooms',
    'menu',
    'workers'
  ]
  
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getHoteldetails(){
    this.http.get("http://localhost:3000/hotelDetails").subscribe(result=>{
      this.getHotel=result;
    })
  }
}
