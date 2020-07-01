import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleImageVariantComponent } from './article-image-variant.component';

describe('ArticleImageVariantComponent', () => {
  let component: ArticleImageVariantComponent;
  let fixture: ComponentFixture<ArticleImageVariantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleImageVariantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleImageVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
