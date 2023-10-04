import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CgicompComponent } from './cgicomp/cgicomp.component';

const routes: Routes = [
  {
    path: 'cgi',
    component: CgicompComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CgiRoutingModule {}
