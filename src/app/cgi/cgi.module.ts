import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CgiRoutingModule } from './cgi-routing.module';
import { CgicompComponent } from './cgicomp/cgicomp.component';

@NgModule({
  declarations: [CgicompComponent],
  imports: [CommonModule, CgiRoutingModule],
  exports: [CgicompComponent],
})
export class CgiModule {}
