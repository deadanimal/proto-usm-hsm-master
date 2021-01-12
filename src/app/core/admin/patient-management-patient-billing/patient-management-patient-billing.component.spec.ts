import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientManagementPatientBillingComponent } from './patient-management-patient-billing.component';

describe('PatientManagementPatientBillingComponent', () => {
  let component: PatientManagementPatientBillingComponent;
  let fixture: ComponentFixture<PatientManagementPatientBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientManagementPatientBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientManagementPatientBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
