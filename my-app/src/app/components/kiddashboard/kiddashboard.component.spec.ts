import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiddashboardComponent } from './kiddashboard.component';

describe('KiddashboardComponent', () => {
  let component: KiddashboardComponent;
  let fixture: ComponentFixture<KiddashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiddashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
