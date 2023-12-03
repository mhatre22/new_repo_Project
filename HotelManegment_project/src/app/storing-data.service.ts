import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class StoringDataService {

constructor ( private http :HttpClient,
){}
url1="http://localhost:3000/owner";
url2 = "http://localhost:3000/hotelDetails";
postApicall(formData :any){

  return this.http.post( "http://localhost:3000/owner" ,formData);
}
getApicall(formData:any){
  return this.http.get( "http://localhost:3000/owner", formData);
}

registerHotel(data:any){
  return this.http.post(this.url2, data)
}

getHotelList(){
  return this.http.get(this.url2)
}

deleteHotel(id:number): Observable<any> {
  return this.http.delete(` http://localhost:3000/hotelDetails/${id}`);
}

updateHotel(id:number, data:any): Observable<any> {
  return this.http.put(` http://localhost:3000/hotelDetails/${id}`, data)
}

}