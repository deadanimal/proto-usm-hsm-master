import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Component, OnInit } from '@angular/core';

import { User } from 'src/assets/mock/admin-user/users.model';

import Dropzone from "dropzone";
Dropzone.autoDiscover = false;

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-asset-iventory-disposal',
  templateUrl: './asset-iventory-disposal.component.html',
  styleUrls: ['./asset-iventory-disposal.component.scss']
})
export class AssetIventoryDisposalComponent implements OnInit {
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
      typedamage: "try",
      assetname: "abcabc",
      iddispose: "1234",
      officername: "a",
      valid: "confirm",
      approve: "pass",
    },
    {
      typedamage: "wasd",
      assetname: "abcabc",
      iddispose: "1235",
      officername: "a",
      valid: "confirm",
      approve: "inprocess",
    },
    {
      typedamage: "qwerty",
      assetname: "abcabc",
      iddispose: "1236",
      officername: "a",
      valid: "confirm",
      approve: "reject",
    },
    {
      typedamage: "hye",
      assetname: "abcabc",
      iddispose: "1237",
      officername: "a",
      valid: "confirm",
      approve: "pass",
    },
    {
      typedamage: "bye",
      assetname: "abcabc",
      iddispose: "1238",
      officername: "a",
      valid: "confirm",
      approve: "inprocess",
    },
    {
      typedamage: "google",
      assetname: "abcabc",
      iddispose: "1239",
      officername: "a",
      valid: "rejected",
      approve: "reject",
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
    this.getChartPie1Disposal()
    this.getChartBar1Disposal()
    

    new Dropzone(document.getElementById("dropzone-multiple"), {
      url: "https://",
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: document.getElementsByClassName(
        "dz-preview-multiple"
      )[0],
      previewTemplate: document.getElementsByClassName("dz-preview-multiple")[0]
        .innerHTML,
      maxFiles: null,
      acceptedFiles: null,
      init: function() {
        this.on("addedfile", function(file) {
          let currentMultipleFile = file;
          if (currentMultipleFile) {
          }
          
        });
      }
    });
    document.getElementsByClassName("dz-preview-multiple")[0].innerHTML = "";
  }

  getChartPie1Disposal() {
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartPie1disposal", am4charts.PieChart);

    // Add data
    chart.data = [ {
      "type": "Under Maintenance",
      "percent": 501.9
    }, {
      "type": "Pending",
      "percent": 301.9
    }, {
      "type": "Completed",
      "percent": 201.1
    }, 
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "type";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }

  getChartBar1Disposal() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartbar1disposal", am4charts.XYChart);

    // Add data
    chart.data = [{
      "month": "January",
      "assets": 2025
    }, {
      "month": "February",
      "assets": 1882
    }, {
      "month": "March",
      "assets": 1809
    }, {
      "month": "April",
      "assets": 1322
    }, {
      "month": "May",
      "assets": 1122
    }, {
      "month": "June",
      "assets": 1114
    }, {
      "month": "July",
      "assets": 984
    }, {
      "month": "August",
      "assets": 711
    }, {
      "month": "September",
      "assets": 665
    }, {
      "month": "October",
      "assets": 580
    }, {
      "month": "November",
      "assets": 443
    }, {
      "month": "December",
      "assets": 441
    }, 
    ];

    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
      if (target.dataItem && target.dataItem.index && 2 == 2) {
        return dy + 25;
      }
      return dy;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "assets";
    series.dataFields.categoryX = "month";
    series.name = "Assets";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  }
  
}
