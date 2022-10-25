import { Component } from '@angular/core';

@Component({
  selector: 'Raclette',
  templateUrl: './raclette.component.html',
  styleUrls: ['./raclette.component.css']
})
export class RacletteComponent  {
title: string = 'raclette Party';

// attributs directives ngClass ou ngStyle true ou false
isThisIngredientVital: boolean = true;

// structure directives ngIf true ou false
isGuestListDisplayed: boolean = true;

// structure directives ngFor 
songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];

}
