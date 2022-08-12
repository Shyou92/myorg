import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonDirective } from './shared/directives/button/impl';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonDirective],
  exports: [ButtonDirective],
})
export class UiModule {}
