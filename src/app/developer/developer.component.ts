import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.models';
import { Skill } from '../models/skill.models';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  myskill: Skill[] = [{name:'Jack',logo:'https://logo-marque.com/wp-content/uploads/2021/09/Jack-Daniels-Logo.png',site: 'www.jack.com'}];
  name = this.myskill[0].name;
  logo = this.myskill[0].logo;
  site = this.myskill[0].site;
  developer: Developer[] = [{firstName: 'Jack', lastName: 'Daniel', age: 18, gender: 'Male', bio:"Production venant d'un matelas de malt",skills: this.myskill}];

  constructor() { }
  ngOnInit(): void {
  }
   onDataChange(event: string): void {
    console.log(event);
  }
}