import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  flourQuantity: number = 0;
  saltQuantity: number = 0;
  sugarQuantity: number = 0;
  eggQuantity: number = 0;
  numberOfCookies: number = 0;

  isCooked: boolean = false;
  cookiesCooked: number = 0;

  // On initialise notre propriété avec une valeur par défaut
// On décore notre propriété avec @Input()
 @Input() myInputData: string = "" 
 
  constructor() { }

  ngOnInit(): void {
  }
  startCooking() {
    this.isCooked = true;
  }
 
 onGetCookies(event: number): void {
    this.cookiesCooked =+ event;
  }

}