import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private el: ElementRef) { }
  @Input() defaultColor: string;
  @Input("testing") highlightColor: string;
  
  @HostListener('mouseenter') onMouseEnter() {
    console.log("printing"+this.highlightColor);
    console.log("printing"+this.defaultColor);
    this.highlight(this.highlightColor || this.defaultColor);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    console.log("printing"+this.highlightColor);
    console.log("printing"+this.defaultColor);
    this.el.nativeElement.style.backgroundColor = color;
  }
}
