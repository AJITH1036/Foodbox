import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  id:number;
  food:Food;
  constructor(private route:ActivatedRoute,
    private foodservice:FoodService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.food=new Food();
    this.foodservice.getFoodById(this.id).subscribe(data=>{
      this.food=data;
    })
  }

}
