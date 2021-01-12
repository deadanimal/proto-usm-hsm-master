import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientManagementPatientAppointmentComponent } from './patient-management-patient-appointment.component';

describe('PatientManagementPatientAppointmentComponent', () => {
  let component: PatientManagementPatientAppointmentComponent;
  let fixture: ComponentFixture<PatientManagementPatientAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientManagementPatientAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientManagementPatientAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
