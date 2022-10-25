import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
// elementRef, qui va te permettre de te référer à l'élément HTML sur lequel tu 
// souhaites que ta directive produise son effet.
// Renderer2 qui, lui, constitue un service t'offrant une palette d'effets possibles
  // constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  //utilisation méthode compacte 2
  @HostBinding('style.backgroundColor') myBackgroundColor!:string;

  constructor() { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  // moment ou souris survole le titre
  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    this.myBackgroundColor = 'yellow';
  }

  //moment ou la souris quitte la zone du titre
  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.myBackgroundColor = 'transparent';
  }
}
