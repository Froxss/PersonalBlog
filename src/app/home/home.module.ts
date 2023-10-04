import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomecompComponent } from './homecomp/homecomp.component';

@NgModule({
  declarations: [HomecompComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomecompComponent],
})
export class HomeModule {}
