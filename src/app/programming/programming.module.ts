import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgrammingRoutingModule } from './programming-routing.module';
import { ProgrammingcompComponent } from './programmingcomp/programmingcomp.component';

@NgModule({
  declarations: [ProgrammingcompComponent],
  imports: [CommonModule, ProgrammingRoutingModule],
  exports: [ProgrammingcompComponent],
})
export class ProgrammingModule {}
