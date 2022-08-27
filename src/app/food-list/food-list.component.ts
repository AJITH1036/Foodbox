import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  food:Food[];

  constructor(private foodservice:FoodService,
             private router:Router) { }

  ngOnInit(): void {
    this.getFoods();
  }

  private getFoods(){
    this.foodservice.getFoodList().subscribe(data =>{
      this.food=data;
    });
  }
 

  deleteFood(id:number){
    this.foodservice.deleteFood(id);
    console.log("food deleted")
    this.goToFoodList();
  }
  goToFoodList(){
    this.router.navigate(['food']);
  }

  updateFood(id:number){
    this.router.navigate(['updatefood',id]);
  }

getFoodById(id:number){
  this.router.navigate(['fooddetails',id]);
}
searchByName(name:string){
  this.router.navigate(['fooddetails',name])
}

addFood(){
  this.router.navigate(['addfood']);
}

}
