import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeItemComponent } from './prize-item.component';

describe('PrizeItemComponent', () => {
  let component: PrizeItemComponent;
  let fixture: ComponentFixture<PrizeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
