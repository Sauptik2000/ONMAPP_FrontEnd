import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllOrderComponent } from './view-all-order.component';

describe('ViewAllOrderComponent', () => {
  let component: ViewAllOrderComponent;
  let fixture: ComponentFixture<ViewAllOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
