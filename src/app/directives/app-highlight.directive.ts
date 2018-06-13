import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective {
 
  @Input('myColor') myColorValue : string;

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = this.myColorValue;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.myColorValue);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
