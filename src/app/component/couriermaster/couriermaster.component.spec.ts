import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouriermasterComponent } from './couriermaster.component';

describe('CouriermasterComponent', () => {
  let component: CouriermasterComponent;
  let fixture: ComponentFixture<CouriermasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouriermasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouriermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
