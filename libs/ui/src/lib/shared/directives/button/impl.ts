import { Directive, ElementRef } from '@angular/core';

import { ButtonDirectives, buttonPrimary, buttonSecondaryMd, buttonSecondarySm } from './model';

@Directive({
  selector: `button[${buttonPrimary}], button[${buttonSecondaryMd}], button[${buttonSecondarySm}]`,
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
