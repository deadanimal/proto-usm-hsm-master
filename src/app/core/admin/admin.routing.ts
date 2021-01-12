import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientManagementPatientRegistrationComponent } from './patient-management-patient-registration/patient-management-patient-registration.component';
import { PatientManagementPatientAdmissionComponent } from './patient-management-patient-admission/patient-management-patient-admission.component';
import { PatientManagementPatientAppointmentComponent } from './patient-management-patient-appointment/patient-management-patient-appointment.component';
import { PatientManagementPatientBillingComponent } from './patient-management-patient-billing/patient-management-patient-billing.component';
import { DiagnosticImagingComponent } from './diagnostic-imaging/diagnostic-imaging.component';
import { DietManagementComponent } from './diet-management/diet-management.component';
import { StructuredDocumentationComponent } from './structured-documentation/structured-documentation.component';
import { RehabManagementComponent } from './rehab-management/rehab-management.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';
import { AssetIventoryRegisterFindComponent } from './asset-iventory-register-find/asset-iventory-register-find.component';
import { AssetIventoryMaintenanceComponent } from './asset-iventory-maintenance/asset-iventory-maintenance.component';
import { AssetIventoryDisposalComponent } from './asset-iventory-disposal/asset-iventory-disposal.component';
//import { AssetIventoryLoadWriteOffComponent } from './asset-iventory-load-write-off/asset-iventory-load-write-off.component';
import { AssetIventoryLostWriteOffComponent } from './asset-iventory-lost-write-off/asset-iventory-lost-write-off.component';
import { ReportComponent } from './report/report.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'patient-management',
                children: [
                    {
                        path: 'patient-registration',
                        component: PatientManagementPatientRegistrationComponent
                    },
                    {
                        path: 'patient-admission',
                        component: PatientManagementPatientAdmissionComponent
                    },
                    {
                        path: 'patient-appointment',
                        component: PatientManagementPatientAppointmentComponent
                    },
                    {
                        path: 'patient-billing',
                        component: PatientManagementPatientBillingComponent
                    }
                ]
            },
            {
                path: 'structured-documentation',
                component: StructuredDocumentationComponent
            },
            {
                path: 'diagnostic-imaging',
                component: DiagnosticImagingComponent
            },
            {
                path: 'diet-management',
                component: DietManagementComponent
            },
            {
                path: 'rehab-management',
                component: RehabManagementComponent
            },
            {
                path: 'schedule-management',
                component: ScheduleManagementComponent
            },
            {
                path: 'asset-iventory',
                children: [
                    {
                        path: 'register-find',
                        component: AssetIventoryRegisterFindComponent
                    },
                    {
                        path: 'maintenance',
                        component: AssetIventoryMaintenanceComponent
                    },
                    {
                        path: 'disposal',
                        component: AssetIventoryDisposalComponent
                    },
                    {
                        path: 'lost-write-off',
                        component: AssetIventoryLostWriteOffComponent
                    }
                ]
            },
            
            {
                path: 'report',
                component: ReportComponent
            }
        ]
    }
]