import { Component, OnInit, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { User } from 'src/assets/mock/admin-user/users.model';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-schedule-management',
  templateUrl: './schedule-management.component.html',
  styleUrls: ['./schedule-management.component.scss']
})
export class ScheduleManagementComponent implements OnInit {
  today: number = Date.now();
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: User[] = []
  SelectionType = SelectionType;

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      doctorname: "afiq",
      specialization: "dentist",
      datetime: "01/01/2020 10.00am",
      patientid: "123abcabc",
      status: "confirm"
    },
    {
      doctorname: "hanif",
      specialization: "dermatologist",
      datetime: "02/02/2020 10.00am",
      patientid: "a243bcabc",
      status: "confirm"
    },
    {
      doctorname: "lina",
      specialization: "cardiologist",
      datetime: "03/03/2020 10.00am",
      patientid: "a564hhw",
      status: "pending"
    },
    {
      doctorname: "yus",
      specialization: "neurologist",
      datetime: "04/04/2020 10.00am",
      patientid: "674b4gs",
      status: "confirm"
    },
    {
      doctorname: "lee",
      specialization: "allergist",
      datetime: "05/05/2020 10.00am",
      patientid: "6j735n",
      status: "pending"
    },
    {
      doctorname: "muthu",
      specialization: "pediatrician",
      datetime: "06/06/2020 10.00am",
      patientid: "84h34tf",
      status: "confirm"
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
    this.getChartLine1Schedule()
    this.getChartBar1Schedule()
  }

  getChartLine1Schedule() {
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartline1schedule", am4charts.XYChart);

    // Add data
    chart.data = [{
      "category": "Adult Male",
      "inpatient": 1,
      "outpatient": 5,
    }, {
      "category": " Adult Female",
      "inpatient": 1,
      "outpatient": 2,
    }, {
      "category": "Kids Male",
      "inpatient": 2,
      "outpatient": 3,
    }, {
      "category": "Kids Female",
      "inpatient": 3,
      "outpatient": 4,
    }, 
    ];

    // Create category axis
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.opposite = true;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inversed = true;
    valueAxis.title.text = "Place taken";
    valueAxis.renderer.minLabelPosition = 0.01;

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "inpatient";
    series1.dataFields.categoryX = "category";
    series1.name = "Inpatient";
    series1.bullets.push(new am4charts.CircleBullet());
    series1.tooltipText = "Number of {name} in {categoryX}: {valueY}";
    series1.legendSettings.valueText = "{valueY}";
    series1.visible  = false;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "outpatient";
    series2.dataFields.categoryX = "category";
    series2.name = 'Outpatient';
    series2.bullets.push(new am4charts.CircleBullet());
    series2.tooltipText = "Number of {name} in {categoryX}: {valueY}";
    series2.legendSettings.valueText = "{valueY}";

    // let series3 = chart.series.push(new am4charts.LineSeries());
    // series3.dataFields.valueY = "uk";
    // series3.dataFields.categoryX = "week";
    // series3.name = 'United Kingdom';
    // series3.bullets.push(new am4charts.CircleBullet());
    // series3.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
    // series3.legendSettings.valueText = "{valueY}";

    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";


    let hs1 = series1.segments.template.states.create("hover")
    hs1.properties.strokeWidth = 5;
    series1.segments.template.strokeWidth = 1;

    let hs2 = series2.segments.template.states.create("hover")
    hs2.properties.strokeWidth = 5;
    series2.segments.template.strokeWidth = 1;

    // let hs3 = series3.segments.template.states.create("hover")
    // hs3.properties.strokeWidth = 5;
    // series3.segments.template.strokeWidth = 1;

    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.itemContainers.template.events.on("over", function(event){
      let segments = event.target.dataItem.dataContext as any;
      segments.each(function(segment){
        segment.isHover = true;
      })
    })

    chart.legend.itemContainers.template.events.on("out", function(event){
      let segments = event.target.dataItem.dataContext as any;
      segments.each(function(segment){
        segment.isHover = false;
      })
    })
  }

  getChartBar1Schedule() {
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartbar1schedule", am4charts.XYChart);


    // Add data
    chart.data = [{
      "year": "Allergist",
      "inpatient": 54,
      "outpatient": 43,
    }, {
      "year": "Cardiologist",
      "inpatient": 24,
      "outpatient": 13,
    },
    {
      "year": "Dentist",
      "inpatient": 43,
      "outpatient": 95,
    },
    {
      "year": "Dermatologist",
      "inpatient": 12,
      "outpatient": 32,
    },
    {
      "year": "Gynecologist",
      "inpatient": 24,
      "outpatient": 12,
    },
    {
      "year": "Neurologist",
      "inpatient": 34,
      "outpatient": 54,
    },
    {
      "year": "Pediatrician",
      "inpatient": 45,
      "outpatient": 31,
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;


    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;

    // Create series
    function createSeries(field, name) {
      
      // Set up series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = true;
      
      // Configure columns
      series.columns.template.width = am4core.percent(60);
      series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
      
      // Add label
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = "{valueY}";
      labelBullet.locationY = 0.5;
      labelBullet.label.hideOversized = true;
      
      return series;
    }

    createSeries("inpatient", "Inpatient");
    createSeries("outpatient", "Outpatient");

    // Legend
    chart.legend = new am4charts.Legend();

  }

}
