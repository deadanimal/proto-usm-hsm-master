import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { User } from 'src/assets/mock/admin-user/users.model';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-asset-iventory-register-find',
  templateUrl: './asset-iventory-register-find.component.html',
  styleUrls: ['./asset-iventory-register-find.component.scss']
})
export class AssetIventoryRegisterFindComponent implements OnInit {
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
      dataname: "try",
      datatype: "abcabc",
      id: "1234",
      date : "1/1/2020",
    },
    {
      dataname: "wasd",
      datatype: "abcabc",
      id: "1235",
      date : "1/1/2020",
    },
    {
      dataname: "qwerty",
      datatype: "abcabc",
      id: "1236",
      date : "1/1/2020",
    },
    {
      dataname: "hye",
      datatype: "abcabc",
      id: "1237",
      date : "1/1/2020",
    },
    {
      dataname: "bye",
      datatype: "abcabc",
      id: "1238",
      date : "1/1/2020",
    },
    {
      dataname: "google",
      datatype: "abcabc",
      id: "1239",
      date : "1/1/2020",
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
    this.getChartPie1RegisterFind()
    this.getChartBar1RegisterFind()
  }

  getChartPie1RegisterFind() {
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartPie1registerfind", am4charts.PieChart);

    // Add data
    chart.data = [ {
      "types": "1",
      "assets": 501.9
    }, {
      "types": "2",
      "assets": 301.9
    }, {
      "types": "3",
      "assets": 201.1
    }, {
      "types": "4",
      "assets": 165.8
    }, {
      "types": "5",
      "assets": 139.9
    }, 
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "assets";
    pieSeries.dataFields.category = "types";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
  }

  getChartBar1RegisterFind() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartbar1registerfind", am4charts.XYChart);

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
    series.name = "assets";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  }

}
