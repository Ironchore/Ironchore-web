import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkItemComponent } from './homework-item.component';

describe('HomeworkItemComponent', () => {
  let component: HomeworkItemComponent;
  let fixture: ComponentFixture<HomeworkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
