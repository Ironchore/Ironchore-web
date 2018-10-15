import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidregisterComponent } from './kidregister.component';

describe('KidregisterComponent', () => {
  let component: KidregisterComponent;
  let fixture: ComponentFixture<KidregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
