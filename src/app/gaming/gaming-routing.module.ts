import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamingcompComponent } from './gamingcomp/gamingcomp.component';

const routes: Routes = [
  {
    path: 'gaming',
    component: GamingcompComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamingRoutingModule {}
