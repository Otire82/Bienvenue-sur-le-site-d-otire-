import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myTestFirstApp';

  onomatopoeiaList: Array<string>= []

  onReceiveNewOnomatopia(event:string): void {
    console.log("event : " +event);
    this.onomatopoeiaList.push(event);
  }
}
