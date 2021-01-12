import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientManagementPatientRegistrationComponent } from './patient-management-patient-registration.component';

describe('PatientManagementPatientRegistrationComponent', () => {
  let component: PatientManagementPatientRegistrationComponent;
  let fixture: ComponentFixture<PatientManagementPatientRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientManagementPatientRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientManagementPatientRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
