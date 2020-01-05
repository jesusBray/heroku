import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  //customize url
  url:string= 'SomeUrl';

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

  constructor(
    private http:HttpClient,
  ) { }

  updateImage(value:any ):Observable<any>{
    return this.http.patch(this.url, value, this.httpOptions);
  }


}
