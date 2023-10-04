import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesigncompComponent } from './designcomp/designcomp.component';

const routes: Routes = [
  {
    path: 'design',
    component: DesigncompComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignRoutingModule {}
