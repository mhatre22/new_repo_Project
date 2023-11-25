import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StoringDataService {
ownerurl = "http://localhost:3000/owner";


constructor ( private http :HttpClient,
  private toster: ToastrService){}
postApicall(formData :any){

  return this.http.post(this.ownerurl, formData);
}
}
