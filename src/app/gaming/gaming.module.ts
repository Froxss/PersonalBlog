import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamingRoutingModule } from './gaming-routing.module';
import { GamingcompComponent } from './gamingcomp/gamingcomp.component';

@NgModule({
  declarations: [GamingcompComponent],
  imports: [CommonModule, GamingRoutingModule],
  exports: [GamingcompComponent],
})
export class GamingModule {}
