import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserListComponent } from './user-list/user-list.component';
import { PaymentComponent } from './payment/payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { FoodlistUserComponent } from './foodlist-user/foodlist-user.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateFoodComponent,
    UpdateFoodComponent,
    FoodListComponent,
    FoodDetailsComponent,
    RegisterUserComponent,
    UserLoginComponent,
    UserListComponent,
    PaymentComponent,
    DashboardComponent,
    AdminComponent,
    FoodlistUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
