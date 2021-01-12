import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientManagementPatientAdmissionComponent } from './patient-management-patient-admission.component';

describe('PatientManagementPatientAdmissionComponent', () => {
  let component: PatientManagementPatientAdmissionComponent;
  let fixture: ComponentFixture<PatientManagementPatientAdmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientManagementPatientAdmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientManagementPatientAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
