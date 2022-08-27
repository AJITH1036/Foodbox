import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  //URL
  url:string="http://localhost:8081/api/food/";

  //inject the DI
  constructor(private http:HttpClient) { }

  //get all foods
getFoodList():Observable<Food[]>{
  return this.http.get<Food[]>(this.url);
}


//delete by id
deleteFood(id:number){
  let endpoints=id;
  this.http.delete(this.url + endpoints).subscribe(data=>{
    return this.getFoodList();
  });
}

//update food
updateFood(id:number,food:Food):Observable<Object>{
  let endpoints=id;
  return this.http.put(this.url + endpoints,food);
}

//find by id
getFoodById(id:number):Observable<Food>{
  let endpoints=id;
 return this.http.get<Food>(this.url + endpoints);
}

//searchFood
searchFood(name:string):Observable<Food>{
  let endpoints=name;
  return this.http.get<Food>(this.url + endpoints)
}

//add food
addFood(food:Food):Observable<Object>{
  return this.http.post(this.url,food);
}




}
