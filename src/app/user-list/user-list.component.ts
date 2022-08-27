import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user:User[];
  constructor(private userservice:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers(){
    this.userservice.getUserList().subscribe(data=>{
      this.user=data;
    });
  }

  deleteUser(id:number){
    this.userservice.deleteUser(id);
    console.log("user deleted");
    this.goToUserList();
  }
  goToUserList(){
    this.router.navigate(['/userlist']);
  }

}
