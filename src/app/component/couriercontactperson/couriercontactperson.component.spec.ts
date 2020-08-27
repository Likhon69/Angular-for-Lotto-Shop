import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouriercontactpersonComponent } from './couriercontactperson.component';

describe('CouriercontactpersonComponent', () => {
  let component: CouriercontactpersonComponent;
  let fixture: ComponentFixture<CouriercontactpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouriercontactpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouriercontactpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
