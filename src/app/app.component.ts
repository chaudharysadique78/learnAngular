import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello welcome to angular training';
  name='SADIK'
  user={
    name:"",
    age:""
  }
  save(){
    console.log(this.user.name);
    console.log(this.user.age);
  }
}
