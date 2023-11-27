import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StoringDataService {
ownerurl = "http://localhost:3000/owner";


constructor ( private http :HttpClient,
){}
postApicall(formData :any){

  return this.http.post(this.ownerurl,formData);
}
getById(formData:any){
  return this.http.get( this.ownerurl + '/' + formData);
}
}

  