import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleImageComponent } from './add-article-image.component';

describe('AddArticleImageComponent', () => {
  let component: AddArticleImageComponent;
  let fixture: ComponentFixture<AddArticleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArticleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
