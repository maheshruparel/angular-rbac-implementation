import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[isAuthorised]' })
export class IsAuthorised {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  @Input() set isAuthorised(shouldAdd: any) {
      console.log('-----------', shouldAdd,' type=',typeof shouldAdd);
    if (typeof shouldAdd == 'string' && true) {
      // If condition is true add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
     // Else remove template from DOM
      this.viewContainer.clear();
    }
  }

}