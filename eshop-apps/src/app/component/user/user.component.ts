import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 //users:User=new User();
 users:User[];
 ngOnInit(): void {
  }
  constructor(private userService:UserService) { }
/*
  

  displayUser(){
    this.userService.getAllUser().subscribe(
      positiveResponse=>{
          console.log(positiveResponse);
       //  this.users=positiveResponse;
        
          
      },
      negativeResponse=>{
          console.log(negativeResponse);
      }

    )
  }*/

}
