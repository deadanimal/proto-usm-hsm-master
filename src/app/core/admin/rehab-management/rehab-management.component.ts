import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_moonrisekingdom from "@amcharts/amcharts4/themes/moonrisekingdom";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { User } from 'src/assets/mock/admin-user/users.model'

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-rehab-management',
  templateUrl: './rehab-management.component.html',
  styleUrls: ['./rehab-management.component.scss']
})
export class RehabManagementComponent implements OnInit {
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
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    },
    {
      patientId: "1234",
      patientName: "Ali",
      category: "abcabc",
      doctor: "Dr. Abu",
    }

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
    this.getChartRehab1()
  }

  getChartRehab1() {
    let chart = am4core.create("chartRehab1", am4charts.XYChart);

// Add data
    chart.data = [{
      "month": "January",
      "revenue": 2025
    }, {
      "month": "February",
      "revenue": 1882
    }, {
      "month": "March",
      "revenue": 1809
    }, {
      "month": "April",
      "revenue": 1322
    }, {
      "month": "May",
      "revenue": 1122
    }, {
      "month": "June",
      "revenue": 1114
    }, {
      "month": "July",
      "revenue": 984
    }, {
      "month": "August",
      "revenue": 711
    }, {
      "month": "September",
      "revenue": 665
    }, {
      "month": "October",
      "revenue": 580
    }, {
      "month": "November",
      "revenue": 443
    }, {
      "month": "December",
      "revenue": 441
    }];

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
    series.dataFields.valueY = "revenue";
    series.dataFields.categoryX = "month";
    series.name = "Revenue";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  }
}
