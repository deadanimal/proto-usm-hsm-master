import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietManagementComponent } from './diet-management.component';

describe('DietManagementComponent', () => {
  let component: DietManagementComponent;
  let fixture: ComponentFixture<DietManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
