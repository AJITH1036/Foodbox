import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';
import { Food } from '../food';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {

  food:Food=new Food();

  constructor(private foodservice:FoodService,
    private router:Router) { }

  ngOnInit(): void {
  }

  addFood(){
    this.foodservice.addFood(this.food).subscribe(data =>{
      console.log(data);
      this.goToFoodList();
    }, error => console.log(error));
  }

  goToFoodList(){
    this.router.navigate(['food']);
  }

  onSubmit(){
    console.log(this.food);
    this.addFood();
  }

}
