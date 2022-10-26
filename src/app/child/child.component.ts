import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // initialise notre propriéte avec une valeur par defaut
  // on décore notre propriété avec @Input()
  @Input() myInputData: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
