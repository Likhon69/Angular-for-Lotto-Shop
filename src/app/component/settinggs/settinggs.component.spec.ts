import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettinggsComponent } from './settinggs.component';

describe('SettinggsComponent', () => {
  let component: SettinggsComponent;
  let fixture: ComponentFixture<SettinggsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettinggsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettinggsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
