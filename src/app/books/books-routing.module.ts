import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookscompComponent } from './bookscomp/bookscomp.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookscompComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
