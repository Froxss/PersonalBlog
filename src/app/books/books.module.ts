import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BooksRoutingModule } from './books-routing.module';
import { BookscompComponent } from './bookscomp/bookscomp.component';

@NgModule({
  declarations: [BookscompComponent],
  imports: [CommonModule, BooksRoutingModule, MatIconModule],
  exports: [BookscompComponent],
})
export class BooksModule {}
