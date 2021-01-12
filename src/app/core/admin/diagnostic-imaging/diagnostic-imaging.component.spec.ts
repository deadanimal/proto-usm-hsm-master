import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticImagingComponent } from './diagnostic-imaging.component';

describe('DiagnosticImagingComponent', () => {
  let component: DiagnosticImagingComponent;
  let fixture: ComponentFixture<DiagnosticImagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticImagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticImagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
