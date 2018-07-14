import { Directive, Renderer2, ElementRef, HostListener, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBackgroundColorChanger]'
})
export class BackgroundColorChangerDirective implements OnInit {

  @Input() defaultColor = 'red';
  @Input() hoverColor = 'yellow';

  @HostBinding('style.backgroundColor') backgroundOfThisElem = this.defaultColor;

  @HostListener('mouseover') mouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.hoverColor);
  }

  @HostListener('mouseleave') onmouseleave = () => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.defaultColor);
  }


  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    this.backgroundOfThisElem = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.defaultColor);
  }

}
