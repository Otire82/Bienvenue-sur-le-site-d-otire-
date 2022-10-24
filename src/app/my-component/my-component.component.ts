import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'MyComponent',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnInit {

  name: string = "Otire";

  imageSrc: string = "https://res.cloudinary.com/otire82/image/upload/c_scale,h_254/v1665132112/kfpqylqxm8ncarksq8ca.jpg";

  constructor() { }

  ngOnInit(): void {
  }
  sayHello(): void  {
    alert("Bonjour !");
  }

}