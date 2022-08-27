import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

id:number;
payment:Food;
  constructor(private router:Router,
    private foodservice:FoodService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.payment=new Food();
    this.foodservice.getFoodById(this.id).subscribe(data=>{
      this.payment=data});
  }


  myClickFunction(id:number) {  
    alert("Payment successfull !");
    this.router.navigate(['dashboard',id]);
  }

    
 

}
