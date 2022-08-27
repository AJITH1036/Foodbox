import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {

  id:number;
  food:Food=new Food();

  constructor(private foodservice:FoodService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.params['id'];

    this.foodservice.getFoodById(this.id).subscribe(data =>{
      this.food=data;
    },error=>console.log(error));
  }

  onSubmit(){
    this.foodservice.updateFood(this.id,this.food).subscribe(data =>{
      this.goToFoodList();
    },error => console.log(error));
  }

  goToFoodList(){
    this.router.navigate(['/food']);
  }

}
