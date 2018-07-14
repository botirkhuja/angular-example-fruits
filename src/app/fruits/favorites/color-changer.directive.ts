import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorChanger]'
})
export class ColorChangerDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'red';
  }

}
