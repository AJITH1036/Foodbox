import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    //URL
    url:string="http://localhost:8081/api/user/";

  constructor(private http:HttpClient) { }

  //get users list
  getUserList():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  //add user
  addUser(user:User):Observable<Object>{
    return this.http.post(this.url,user);
  }

//delete 
deleteUser(id:number){
  let endpoints=id;
  this.http.delete(this.url + endpoints);
  return this.getUserList();
}

  //findbyname and password
  login(email:string,password:string):Observable<Object>{
    let a=email;
    let b=password;
    return this.http.get(this.url + a + b);

  }
  
}
