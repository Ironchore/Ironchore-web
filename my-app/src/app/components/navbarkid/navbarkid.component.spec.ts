import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarkidComponent } from './navbarkid.component';

describe('NavbarkidComponent', () => {
  let component: NavbarkidComponent;
  let fixture: ComponentFixture<NavbarkidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarkidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarkidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
