import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  product={
    name:"Relme X",
    color:"Blue",
    price:17000,
    launchedOn:Date.now()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
