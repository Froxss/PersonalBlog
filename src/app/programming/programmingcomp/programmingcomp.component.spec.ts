import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingcompComponent } from './programmingcomp.component';

describe('ProgrammingcompComponent', () => {
  let component: ProgrammingcompComponent;
  let fixture: ComponentFixture<ProgrammingcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammingcompComponent],
    });
    fixture = TestBed.createComponent(ProgrammingcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
