export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/admin/patient-management',
    title: ' Patient Management',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'patient-management',
    isCollapsed: true,
    children: [
      { path: 'patient-registration', title: 'Patient Registration', type: 'link' },
      { path: 'patient-admission', title: 'Patient Admission', type: 'link' },
      { path: 'patient-appointment', title: 'Patient Appointment', type: 'link' },
      { path: 'patient-billing', title: 'Patient Billing', type: 'link' }
    ]
  },
  {
    path: '/admin/structured-documentation',
    title: 'Structured Documentation',
    type: 'link',
    icontype: 'ni ni-book-bookmark text-orange'
  },
  {
    path: '/admin/diagnostic-imaging',
    title: 'Diagnostic Imaging',
    type: 'link',
    icontype: 'fas fa-diagnoses text-green'
  },
  {
    path: '/admin/diet-management',
    title: 'Diet Management',
    type: 'link',
    icontype: 'fas fa-balance-scale text-teal'
  },
  {
    path: '/admin/rehab-management',
    title: 'Rehabilitation Management',
    type: 'link',
    icontype: 'far fa-hospital text-gray-dark'
  },
  {
    path: '/admin/schedule-management',
    title: 'Schedule Management',
    type: 'link',
    icontype: 'far fa-calendar-alt text-orange'
  },
  {
    path: '/admin/asset-iventory',
    title: ' Asset & Iventory Management',
    type: 'sub',
    icontype: 'far fa-edit text-indigo',
    collapse: 'patient-management',
    isCollapsed: true,
    children: [
      { path: 'register-find', title: 'Register/Find', type: 'link' },
      { path: 'maintenance', title: 'Maintenance', type: 'link' },
      { path: 'disposal', title: 'Disposal', type: 'link' },
      { path: 'lost-write-off', title: 'Lost and Write Off', type: 'link' }
    ]
  },
  // {
  //   path: '/admin/management',
  //   title: 'Management',
  //   type: 'sub',
  //   icontype: 'fas fa-file-invoice text-pink',
  //   collapse: 'management',
  //   isCollapsed: true,
  //   children: [
  //     { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
  //     { path: 'user', title: 'User', type: 'link' }
  //   ]
  // },
  // {
  //   path: '/admin/report',
  //   title: 'Reporting',
  //   type: 'link',
  //   icontype: 'fas fa-chart-bar text-red'
  // },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];