import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'UserProfil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'Pourquoi pas!',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
    hide: true
  };

  constructor() { }

  ngOnInit(): void {
  }
  hideMe(): void  {
    alert("Bonjour !");
  }

}