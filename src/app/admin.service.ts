import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

     //URL
     url:string="http://localhost:8081/api/admin/";

  constructor(private http:HttpClient) { }

  login(name:string,password:string):Observable<Object>{
    let a=name;
    let b=password;
    return this.http.get(this.url + a + b);

  }
}
