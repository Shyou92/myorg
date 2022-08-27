import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonDirectiveModule } from './shared/directives/button/module';

@NgModule({
  imports: [CommonModule, ButtonDirectiveModule],
  declarations: [],
  exports: [ButtonDirectiveModule],
})
export class UiModule {}
