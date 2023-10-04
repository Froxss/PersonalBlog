import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgrammingcompComponent } from './programmingcomp/programmingcomp.component';

const routes: Routes = [
  {
    path: 'programming',
    component: ProgrammingcompComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammingRoutingModule {}
