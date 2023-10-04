import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecompComponent } from './homecomp/homecomp.component';

const routes: Routes = [
  {
    path: '',
    component: HomecompComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
