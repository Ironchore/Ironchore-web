import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeListComponent } from './prize-list.component';

describe('PrizeListComponent', () => {
  let component: PrizeListComponent;
  let fixture: ComponentFixture<PrizeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
