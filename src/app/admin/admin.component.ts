import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  name:string;
  password:string

  admin:Admin=new Admin();
  constructor(private adminservice:AdminService,
    private route:ActivatedRoute,
   private router:Router) { }

  ngOnInit(): void {
    this.name,this.password=this.route.params['foodlist'];

    this.adminservice.login(this.name,this.password).subscribe(data=>{
      this.admin;
    })
  }
  onSubmit(){
    this.adminservice.login(this.name,this.password).subscribe(data=>{
      this.login(this.name);
    })
  }
   login(name){
    if((name!=null)){
      this.router.navigate(['food']);
    }
  

     }


}
