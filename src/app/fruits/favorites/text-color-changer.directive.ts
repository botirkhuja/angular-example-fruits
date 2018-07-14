import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTextColorChanger]'
})
export class TextColorChangerDirective {

  @HostBinding('style.color') textColor = 'white';
  @HostBinding('style.backgroundColor') colorOfBackGrouund = 'black';

  constructor() { }

}
