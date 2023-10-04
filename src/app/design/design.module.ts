import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { DesigncompComponent } from './designcomp/designcomp.component';

@NgModule({
  declarations: [DesigncompComponent],
  imports: [CommonModule, DesignRoutingModule],
  exports: [DesigncompComponent],
})
export class DesignModule {}
