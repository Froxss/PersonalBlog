import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookscompComponent } from './bookscomp.component';

describe('BookscompComponent', () => {
  let component: BookscompComponent;
  let fixture: ComponentFixture<BookscompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookscompComponent],
    });
    fixture = TestBed.createComponent(BookscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
