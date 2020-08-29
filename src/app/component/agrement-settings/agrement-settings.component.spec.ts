import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrementSettingsComponent } from './agrement-settings.component';

describe('AgrementSettingsComponent', () => {
  let component: AgrementSettingsComponent;
  let fixture: ComponentFixture<AgrementSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrementSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrementSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
