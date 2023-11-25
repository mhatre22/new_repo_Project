import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoringDataService {
url = "http://localhost:3000";
endpoint = "owner";
data : any;
constructor ( private http :HttpClient){}
postApicall(endpoint :string,data :any){
  let url = this.url + endpoint;
  return this.http.post(url,data)
}
}
