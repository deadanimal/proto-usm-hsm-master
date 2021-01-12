import { Component, OnInit, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";

import { User } from 'src/assets/mock/admin-user/users.model'

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-patient-management-patient-admission',
  templateUrl: './patient-management-patient-admission.component.html',
  styleUrls: ['./patient-management-patient-admission.component.scss']
})
export class PatientManagementPatientAdmissionComponent implements OnInit {
  today: number = Date.now();
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: User[] = [];
  SelectionType = SelectionType;
  
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    {
      adultmale: "1234",
      adultfemale: "1257",
      kidsmale: "234",
      kidsfemale: "189",
      wards: "abcd123"
    },
    
  ];

  dismissible = true;

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  constructor(
    private modalService: BsModalService,
  ) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
   }

   openDefaultModal(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }

  successSwal() {
    swal.fire({
      title: "Success",
      // text: "A few words about this sweet alert ...",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success"
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
  onActivate(event) {
    this.activeRow = event.row;
  }

  ngOnInit() {
    this.getChart3DPie()
    this.getChartLollipop1()
    this.getChartPie()
    this.getChart3DCylinder()

    
  }

  getChart3DPie() {
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("chart3DPie1admission", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.legend = new am4charts.Legend();
    
    chart.data = [
      {
        availability: "Available",
        percent: 501.9
      },
      {
        availability: "Not Available",
        percent: 301.9
      },
      {
        availability: "Booked",
        percent: 201.1
      },
      {
        availability: "Occupied",
        percent: 165.8
      },
      
    ];
    
    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "percent";
    series.dataFields.category = "availability";
  }

  getChartLollipop1() {
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("chartLollipop1admission", am4charts.XYChart);

    let data = [];
    let value = 120;

    let names = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    for (var i = 0; i < names.length; i++) {
      value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
      data.push({ category: names[i], value: value });
    }

    chart.data = data;
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = -90;
    categoryAxis.renderer.labels.template.horizontalCenter = "left";
    categoryAxis.renderer.labels.template.location = 0.5;

    categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.strokeDasharray = "1,3";
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";

    let bullet = series.bullets.create(am4charts.CircleBullet);

    chart.cursor = new am4charts.XYCursor();

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarY = new am4core.Scrollbar();
  }

  getChartPie() {
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("chartPie1admission", am4charts.PieChart);

    chart.data = [ {
      "category": "Adult Male",
      "count": 501.9
    }, {
      "category": "Adult Female",
      "count": 301.9
    }, {
      "category": "Kids Male",
      "count": 201.1
    }, {
      "category": "Kids Female",
      "count": 165.8
    }, 
   ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "count";
    pieSeries.dataFields.category = "category";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }
  
  getChart3DCylinder() {
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("chart3DCylinder1admission", am4charts.XYChart3D);
    chart.paddingBottom = 30;
    chart.angle = 35;

    // Add data
    chart.data = [{
      "age": "0-5",
      "patient": 4025
    }, {
      "age": "6-10",
      "patient": 1882
    }, {
      "age": "11-19",
      "patient": 1809
    }, {
      "age": "20-29",
      "patient": 1322
    }, {
      "age": "30-39",
      "patient": 1122
    }, {
      "age": "40-49",
      "patient": 1114
    }, {
      "age": "50++",
      "patient": 984
    }, 
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "age";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.rotation = -90;
    labelTemplate.horizontalCenter = "left";
    labelTemplate.verticalCenter = "middle";
    labelTemplate.dy = 10; // moves it a bit down;
    labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;

    // Create series
    let series = chart.series.push(new am4charts.ConeSeries());
    series.dataFields.valueY = "patient";
    series.dataFields.categoryX = "age";

    let columnTemplate = series.columns.template;
    columnTemplate.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })

    columnTemplate.adapter.add("stroke", function(stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })
  }

}


