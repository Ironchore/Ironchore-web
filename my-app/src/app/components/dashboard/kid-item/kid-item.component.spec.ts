import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidItemComponent } from './kid-item.component';

describe('KidItemComponent', () => {
  let component: KidItemComponent;
  let fixture: ComponentFixture<KidItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
