import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodlistUserComponent } from './foodlist-user/foodlist-user.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {"path":'food',component:FoodListComponent},
  {"path":'foodlist',component:FoodlistUserComponent},
  {"path":'updatefood/:id',component:UpdateFoodComponent},
  {"path":'fooddetails/:id',component:FoodDetailsComponent},
  {"path":'fooddetails/:name',component:FoodDetailsComponent},
  {"path":'',redirectTo:'food',pathMatch:'full'},
  {"path":'addfood',component:CreateFoodComponent},
  {"path":'register',component:RegisterUserComponent},
  {"path":'login',component:UserLoginComponent},
  {"path":'userlist',component:UserListComponent},
  {"path":'admlogin',component:AdminComponent},
  {"path":'payment/:id',component:PaymentComponent},
  {"path":'dashboard/:id',component:DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
