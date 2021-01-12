import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredDocumentationComponent } from './structured-documentation.component';

describe('StructuredDocumentationComponent', () => {
  let component: StructuredDocumentationComponent;
  let fixture: ComponentFixture<StructuredDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuredDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuredDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
