import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionsettingsComponent } from './institutionsettings.component';

describe('InstitutionsettingsComponent', () => {
  let component: InstitutionsettingsComponent;
  let fixture: ComponentFixture<InstitutionsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
