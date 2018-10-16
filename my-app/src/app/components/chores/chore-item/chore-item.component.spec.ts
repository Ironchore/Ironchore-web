import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreItemComponent } from './chore-item.component';

describe('ChoreItemComponent', () => {
  let component: ChoreItemComponent;
  let fixture: ComponentFixture<ChoreItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoreItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
