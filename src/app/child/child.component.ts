import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // initialise notre propriéte avec une valeur par defaut
  // on décore notre propriété avec @Input()
  @Input() myInputData: string = "";

//   // @Output en plus du @Input, il faut que celui ci soit typé avec EventEmitter
//   @Output()
// dataChange: EventEmitter<string> = new EventEmitter();

// sendDataToParent(): void {
//   this.dataChange.emit('Chaîne de caractères envoyée au parent');
// }
  constructor() { }

  ngOnInit(): void {
  }

}
