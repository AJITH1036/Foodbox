import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:User=new User();
 
  
  constructor(private userservice:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

  addUser(){
       this.userservice.addUser(this.user).subscribe(data=>{
       console.log(data);
       this.goToLogin();
        },error=>console.log(error));
  }
  goToLogin(){
    this.router.navigate(['login']);
  }

  onSubmit(){
    console.log(this.user);
    this.addUser();
  }
}
