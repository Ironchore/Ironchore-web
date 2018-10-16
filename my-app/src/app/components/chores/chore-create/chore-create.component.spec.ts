import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreCreateComponent } from './chore-create.component';

describe('ChoreCreateComponent', () => {
  let component: ChoreCreateComponent;
  let fixture: ComponentFixture<ChoreCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoreCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
