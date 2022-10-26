import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-oven',
  templateUrl: './magic-oven.component.html',
  styleUrls: ['./magic-oven.component.css']
})
export class MagicOvenComponent implements OnInit {

@Input()
startCooking: boolean = false;

@Input()
numberOfCookies: number = 0;

@Input()
flour: number = 0;

@Input()
salt: number = 0;

@Input()
sugar: number = 0;

@Input()
egg: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
