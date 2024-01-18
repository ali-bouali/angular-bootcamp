import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDevComponent } from './mobile-dev.component';

describe('MobileDevComponent', () => {
  let component: MobileDevComponent;
  let fixture: ComponentFixture<MobileDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileDevComponent]
    });
    fixture = TestBed.createComponent(MobileDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
