import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // Tu instancies ton objet avec des valeurs initiales
  model: Order = new Order("", 0, new Date(), "");

  constructor() { }
  onSubmit(): void{
    // formulaire envoyé
    console.log("submitted");
  }

  ngOnInit(): void {
  }

}
// modèle de données
export class Order {
    constructor(
        public title: string,
        public quantity: number,
        public date: Date,
        public contact: string
    ) {}
}
