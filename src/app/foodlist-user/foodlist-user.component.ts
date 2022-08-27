import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foodlist-user',
  templateUrl: './foodlist-user.component.html',
  styleUrls: ['./foodlist-user.component.css']
})
export class FoodlistUserComponent implements OnInit {
f:Food[];
food:Food=new Food();
name:string;
  constructor(private foodservice:FoodService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.name=this.route.params['name'];

    this.foodservice.searchFood(this.name).subscribe(data=>{
      this.food=data;
    })
    this.getFoods();
  }


  private getFoods(){
    this.foodservice.getFoodList().subscribe(data=>{
      this.f=data});
  }
onSubmit(){
this.foodservice.searchFood(this.name).subscribe(data=>{
  this.searchByName(this.name)
})
}
  
  searchByName(name:string){
    this.router.navigate(['fooddetails',name]);
  }

  buyNow(id:number){
    this.router.navigate(['fooddetails',id]);
  }

}
