import { Component, OnInit, NgZone, OnDestroy, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { User } from 'src/assets/mock/admin-user/users.model'
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';

import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
am4core.useTheme(am4themes_animated);

import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-diagnostic-imaging',
  templateUrl: './diagnostic-imaging.component.html',
  styleUrls: ['./diagnostic-imaging.component.scss']
})
export class DiagnosticImagingComponent implements OnInit {
  today: number = Date.now();
  private chart: any
  private chart1: any
  private chart2: any

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: User[] = []
  SelectionType = SelectionType;


  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  // Form
  registerForm: FormGroup
  registerFormMessages = {
    'name': [
      { type: 'required', message: 'Name is required' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'A valid email is required' }
    ]
  }

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      patientId: "1234",
      patientName: "Ali",
      type: "abcabc",
      location: "Edinburgh",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      type: "abcabc",
      location: "Edinburgh",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      type: "abcabc",
      location: "Edinburgh",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      type: "abcabc",
      location: "Edinburgh",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      type: "abcabc",
      location: "Edinburgh",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      type: "abcabc",
      location: "Edinburgh",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      type: "abcabc",
      location: "Edinburgh",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      type: "abcabc",
      location: "Edinburgh",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      type: "abcabc",
      location: "Edinburgh",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      type: "abcabc",
      location: "Edinburgh",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      type: "abcabc",
      location: "Edinburgh",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      type: "abcabc",
      location: "Edinburgh",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      type: "abcabc",
      location: "Edinburgh",
    },

  ];

  constructor(
    private mockService: MocksService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private zone: NgZone
  ) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
  }
  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ]))
    })
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chart) {
          console.log('Chart disposed')
          this.chart.dispose()
        }
        if (this.chart1) {
          console.log('Chart disposed')
          this.chart1.dispose()
        }
        if (this.chart2) {
          console.log('Chart disposed')
          this.chart2.dispose()
        }
        
      }
    )
  }

 

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartPieDiagimag1()
      
    })
  }

  getChartPieDiagimag1() {
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartpiediagimg1", am4charts.PieChart);

    // Add data
    chart.data = [ {
      "type": "Phycisian A",
      "percent": 501.9
    }, {
      "type": "Phycisian B",
      "percent": 301.9
    }, {
      "type": "Phycisian C",
      "percent": 201.1
    }, {
      "type": "Phycisian D",
      "percent": 165.8
    },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "type";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
  }

  

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    this.registerForm.reset()
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to create this new user?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Success",
      text: "A new user has been created!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    }).then((result) => {
      if (result.value) {
        this.modal.hide()
        this.registerForm.reset()
      }
    })
  }

}
