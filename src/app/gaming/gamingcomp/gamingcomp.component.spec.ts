import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingcompComponent } from './gamingcomp.component';

describe('GamingcompComponent', () => {
  let component: GamingcompComponent;
  let fixture: ComponentFixture<GamingcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamingcompComponent]
    });
    fixture = TestBed.createComponent(GamingcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
