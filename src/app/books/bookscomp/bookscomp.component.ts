import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../../datashare.service';

@Component({
  selector: 'app-bookscomp',
  templateUrl: './bookscomp.component.html',
  styleUrls: ['./bookscomp.component.css'],
})
export class BookscompComponent implements OnInit {
  booksList: any[] = [];
  constructor(private dataShareService: DatashareService) {}

  currentPage: number = 1;
  cardsPerPage: number = 12;

  ngOnInit(): void {
    this.booksList = this.dataShareService.booksList;
  }

  nextPage() {
    const totalPages = Math.ceil(this.booksList.length / this.cardsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getVisibleBooks(): any[] {
    const startIndex = (this.currentPage - 1) * this.cardsPerPage;
    const endIndex = startIndex + this.cardsPerPage;
    return this.booksList.slice(startIndex, endIndex);
  }

  getTotalPages(): number {
    return Math.ceil(this.booksList.length / this.cardsPerPage);
  }
}
