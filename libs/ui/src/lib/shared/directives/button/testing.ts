import { NgModule } from '@angular/core';

import { ButtonDirectiveModule } from './module';

@NgModule({
  imports: [ButtonDirectiveModule],
  exports: [ButtonDirectiveModule],
})
export class ButtonDirectiveTestingModule {}
