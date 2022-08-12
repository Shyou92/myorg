import { Directive, ElementRef } from '@angular/core';

import { ButtonDirectives, buttonSelector } from './model';

@Directive({
  selector: `button[${buttonSelector}]`,
})
export class ButtonDirective {
  constructor(private elementRef: ElementRef<HTMLButtonElement>) {
    ButtonDirectives.forEach((directive) => {
      if (this.elementRef.nativeElement.hasAttribute(directive)) {
        this.elementRef.nativeElement.classList.add(directive);
      }
    });
  }
}
