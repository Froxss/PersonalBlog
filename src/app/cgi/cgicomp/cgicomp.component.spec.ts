import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgicompComponent } from './cgicomp.component';

describe('CgicompComponent', () => {
  let component: CgicompComponent;
  let fixture: ComponentFixture<CgicompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CgicompComponent]
    });
    fixture = TestBed.createComponent(CgicompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
