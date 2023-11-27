import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StoringDataService {



constructor ( private http :HttpClient,
){}
postApicall(formData :any){

  return this.http.post( "http://localhost:3000/owner" ,formData);
}
getApicall(formData:any){
  return this.http.get( "http://localhost:3000/owner", formData);
}
}

  