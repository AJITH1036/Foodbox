import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
 
  email:string;
  password:string

  user:User=new User();

  constructor(private userservice:UserService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.email,this.password=this.route.params['login'];

    this.userservice.login(this.email,this.password).subscribe(data=>{
      this.user;
    },error=>console.log(error));

  }

  onSubmit(){
    this.userservice.login(this.email,this.password).subscribe(data=>{
      this.login(this.email,this.password);
    })
  }
   login(email,password){
    if((email!=null)&&(password!=null)){
      this.router.navigate(['foodlist']);
    }
    else{
      this.router.navigate(['login']);
    }
   
     }

}
