import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import User from 'src/app/Entity/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user:User=new User;
  users:User[]=[];

  save(){
    // console.log(this.user.name);
    // console.log(this.user.age);
     const observable= this.userService.createUser(this.user);
     observable.subscribe(
       (response:any)=>{
         console.log(response);
       },
       function(error){
         console.log(error);
         alert("Something went wrong")
      }
       
     )

  }

  deleteRow(user, index){
     const observable=this.userService.deleteUser(user);
     observable.subscribe((response :any)=>{
      console.log(response);
      this.users.splice(index,1)
     })
  }
  constructor(public userService:UserService) { }
  
  ngOnInit(): void {
    const promise = this.userService.getUser();
    promise.subscribe((response)=>{
     console.log(response);
     this.users=response as User[];
    })
  }

}
