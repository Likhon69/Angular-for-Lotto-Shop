import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerHeaderComponent } from './picker-header.component';

describe('PickerHeaderComponent', () => {
  let component: PickerHeaderComponent;
  let fixture: ComponentFixture<PickerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
