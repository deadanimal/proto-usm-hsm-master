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
  selector: 'app-asset-iventory-lost-write-off',
  templateUrl: './asset-iventory-lost-write-off.component.html',
  styleUrls: ['./asset-iventory-lost-write-off.component.scss']
})
export class AssetIventoryLostWriteOffComponent implements OnInit {
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
      reportname: "try",
      reportid: "123abcabc",
      date: "01/01/2020",
      reportername: "Afiq",
    },
    {
      reportname: "wasd",
      reportid: "a243bcabc",
      date: "02/02/2020",
      reportername: "Hanif",
    },
    {
      reportname: "qwerty",
      reportid: "a564hhw",
      date: "03/03/2020",
      reportername: "Amir",
    },
    {
      reportname: "hye",
      reportid: "674b4gs",
      date: "04/04/2020",
      reportername: "Fattah",
    },
    {
      reportname: "bye",
      reportid: "6j735n",
      date: "05/05/2020",
      reportername: "Hafiz",
    },
    {
      reportname: "google",
      reportid: "84h34tf",
      date: "06/06/2020",
      reportername: "Yus",
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
    this.getChartPie1LoadWrite()
    this.getChartBar1LoadWrite()
    this.getChartPie2LoadWrite()
  }

  getChartPie1LoadWrite() {
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartPie1lostwrite", am4charts.PieChart);

    // Add data
    chart.data = [ {
      "type": "1",
      "percent": 501.9
    }, {
      "type": "2",
      "percent": 301.9
    }, {
      "type": "3",
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

  getChartBar1LoadWrite() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartbar1lostwrite", am4charts.XYChart);

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

  getChartPie2LoadWrite() {
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartbpie2lostwrite", am4charts.PieChart);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "report";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template
      // change the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
          "property": "cursor",
          "value": "pointer"
        }
      ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0,0,0,0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    chart.legend = new am4charts.Legend();

    chart.data = [{
      "report": "Report 1",
      "percent": 501.9
    },{
      "report": " Report 2",
      "percent": 165.8
    }, {
      "report": "Report 3",
      "percent": 139.9
    }, {
      "report": "Report 4",
      "percent": 128.3
    }, {
      "report": "Report 5",
      "percent": 99
    }, {
      "report": "Report 6",
      "percent": 60
    }];
  }

}
