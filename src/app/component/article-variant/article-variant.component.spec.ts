import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleVariantComponent } from './article-variant.component';

describe('ArticleVariantComponent', () => {
  let component: ArticleVariantComponent;
  let fixture: ComponentFixture<ArticleVariantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleVariantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
