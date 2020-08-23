import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSettingsComponent } from './article-settings.component';

describe('ArticleSettingsComponent', () => {
  let component: ArticleSettingsComponent;
  let fixture: ComponentFixture<ArticleSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
