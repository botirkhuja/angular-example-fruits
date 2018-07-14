import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vConRef.createEmbeddedView(this.templateRef);
    } else {
      this.vConRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vConRef: ViewContainerRef) { }

}
