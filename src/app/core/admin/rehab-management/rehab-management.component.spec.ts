import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabManagementComponent } from './rehab-management.component';

describe('RehabManagementComponent', () => {
  let component: RehabManagementComponent;
  let fixture: ComponentFixture<RehabManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
