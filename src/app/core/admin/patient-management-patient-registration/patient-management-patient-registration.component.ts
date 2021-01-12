import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { User } from 'src/assets/mock/admin-user/users.model'

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-patient-management-patient-registration',
  templateUrl: './patient-management-patient-registration.component.html',
  styleUrls: ['./patient-management-patient-registration.component.scss']
})
export class PatientManagementPatientRegistrationComponent implements OnInit {
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

  constructor() {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
   }

  ngOnInit() {
    this.getChartPie()
    this.getChart3DCylinder()
    this.getChartLineAdmission()
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

  getChartPie() {
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("chartPie1registration", am4charts.PieChart);

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

    let chart = am4core.create("chart3DCylinder1registration", am4charts.XYChart3D);
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

  getChartLineAdmission() {
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartLineAdmission", am4charts.XYChart);

    //

    // Increase contrast by taking evey second color
    let data = [];
let value = 50;
for(var i = 0; i < 300; i++){
  let date = new Date();
  date.setHours(0,0,0,0);
  date.setDate(i);
  value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
  data.push({date:date, value: value});
}

chart.data = data;

// Create axes
let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 60;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
let series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value";
series.dataFields.dateX = "date";
series.tooltipText = "{value}"

series.tooltip.pointerOrientation = "vertical";

chart.cursor = new am4charts.XYCursor();
chart.cursor.snapToSeries = series;
chart.cursor.xAxis = dateAxis;

//chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarX = new am4core.Scrollbar();
  }

}
