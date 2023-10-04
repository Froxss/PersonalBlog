import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigncompComponent } from './designcomp.component';

describe('DesigncompComponent', () => {
  let component: DesigncompComponent;
  let fixture: ComponentFixture<DesigncompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesigncompComponent]
    });
    fixture = TestBed.createComponent(DesigncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
