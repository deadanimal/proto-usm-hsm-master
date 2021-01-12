import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { PatientManagementComponent } from './patient-management/patient-management.component';
import { PatientManagementPatientRegistrationComponent } from './patient-management-patient-registration/patient-management-patient-registration.component';
import { PatientManagementPatientAdmissionComponent } from './patient-management-patient-admission/patient-management-patient-admission.component';
import { PatientManagementPatientAppointmentComponent } from './patient-management-patient-appointment/patient-management-patient-appointment.component';
import { PatientManagementPatientBillingComponent } from './patient-management-patient-billing/patient-management-patient-billing.component';
import { StructuredDocumentationComponent } from './structured-documentation/structured-documentation.component';
import { DiagnosticImagingComponent } from './diagnostic-imaging/diagnostic-imaging.component';
import { DietManagementComponent } from './diet-management/diet-management.component';
import { RehabManagementComponent } from './rehab-management/rehab-management.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';
import { AssetIventoryComponent } from './asset-iventory/asset-iventory.component';
import { AssetIventoryRegisterFindComponent } from './asset-iventory-register-find/asset-iventory-register-find.component';
import { AssetIventoryMaintenanceComponent } from './asset-iventory-maintenance/asset-iventory-maintenance.component';
import { AssetIventoryDisposalComponent } from './asset-iventory-disposal/asset-iventory-disposal.component';
//import { AssetIventoryLoadWriteOffComponent } from './asset-iventory-load-write-off/asset-iventory-load-write-off.component';
import { AssetIventoryLostWriteOffComponent } from './asset-iventory-lost-write-off/asset-iventory-lost-write-off.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ReportComponent,
    PatientManagementComponent,
    PatientManagementPatientRegistrationComponent,
    PatientManagementPatientAdmissionComponent,
    PatientManagementPatientAppointmentComponent,
    PatientManagementPatientBillingComponent,
    StructuredDocumentationComponent,
    DiagnosticImagingComponent,
    DietManagementComponent,
    RehabManagementComponent,
    ScheduleManagementComponent,
    AssetIventoryComponent,
    AssetIventoryRegisterFindComponent,
    AssetIventoryMaintenanceComponent,
    AssetIventoryDisposalComponent,
    // AssetIventoryLoadWriteOffComponent,
    AssetIventoryLostWriteOffComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
