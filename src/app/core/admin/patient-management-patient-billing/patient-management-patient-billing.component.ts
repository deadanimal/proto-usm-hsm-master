import { Component, OnInit, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
//import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
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
  selector: 'app-patient-management-patient-billing',
  templateUrl: './patient-management-patient-billing.component.html',
  styleUrls: ['./patient-management-patient-billing.component.scss']
})
export class PatientManagementPatientBillingComponent implements OnInit {
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
      name: "Ali",
      dateregistered: "1/1/2020",
      wards: "Cempaka 1",
      category: "1",
      type: "Insurance"
    },
    {
      name: "Sarah",
      dateregistered: "11/2/2020",
      wards: "Cempaka 2",
      category: "2",
      type: "Insurance"
    },
    {
      name: "Lee",
      dateregistered: "23/6/2020",
      wards: "Cempaka 1",
      category: "1",
      type: "Cash"
    },
    
  ];

  dismissible = true;

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  constructor(private modalService: BsModalService) {
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
    this.getChartBar1Billing()
    this.getChartDonut1Billing()
    this.getChartBar2Billing()
  }

  getChartBar1Billing() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartBar1Billing", am4charts.XYChart3D);

    // Add data
    chart.data = [{
        "months": "January",
        "year2019": 3.5,
        "year2020": 4.2
    }, {
        "months": "February",
        "year2019": 1.7,
        "year2020": 3.1
    }, {
        "months": "March",
        "year2019": 2.8,
        "year2020": 2.9
    }, {
        "months": "April",
        "year2019": 2.6,
        "year2020": 2.3
    }, {
        "months": "May",
        "year2019": 1.4,
        "year2020": 2.1
    }, {
        "months": "June",
        "year2019": 2.6,
        "year2020": 4.9
    }, {
        "months": "July",
        "year2019": 6.4,
        "year2020": 7.2
    }, {
        "months": "August",
        "year2019": 8,
        "year2020": 7.1
    },
    {
        "months": "September",
        "year2019": 9.9,
        "year2020": 10.1
    },
    {
        "months": "October",
        "year2019": 8,
        "year2020": 7.1
    },
    {
        "months": "November",
        "year2019": 8,
        "year2020": 7.1
    },
    {
        "months": "December",
        "year2019": 8,
        "year2020": 7.1
    },

  ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "months";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "GDP growth rate";
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text + "%";
    });

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "year2019";
    series.dataFields.categoryX = "months";
    series.name = "Year 2019";
    series.clustered = false;
    series.columns.template.tooltipText = "Revenue {category} (2019): [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    let series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "year2020";
    series2.dataFields.categoryX = "months";
    series2.name = "Year 2020";
    series2.clustered = false;
    series2.columns.template.tooltipText = "Revenue {category} (2020): [bold]{valueY}[/]";
      }

  getChartDonut1Billing() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartDonut1Billing", am4charts.PieChart);

    // Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = am4core.percent(40);



    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "category";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.innerRadius = 10;
    pieSeries.slices.template.fillOpacity = 0.5;

    pieSeries.slices.template.propertyFields.disabled = "labelDisabled";
    pieSeries.labels.template.propertyFields.disabled = "labelDisabled";
    pieSeries.ticks.template.propertyFields.disabled = "labelDisabled";


    // Add data
    pieSeries.data = [{
      "category": "Billed + Unbilled",
      "value": 60
    }, {
      "category": "Unused",
      "value": 30,
      "labelDisabled":true
    }];

    // Disable sliding out of slices
    pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
    pieSeries.slices.template.states.getKey("hover").properties.scale = 1;

    // Add second series
    let pieSeries2 = chart.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "value";
    pieSeries2.dataFields.category = "category";
    pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
    pieSeries2.slices.template.states.getKey("hover").properties.scale = 1;
    pieSeries2.slices.template.propertyFields.fill = "fill";

    // Add data
    pieSeries2.data = [{
      "category": "Billed",
      "value": 30
    }, {
      "category": "Unbilled",
      "value": 30
    }, {
      "category": "In progress",
      "value": 30,
      "fill":"#dedede"
    }];


    pieSeries.adapter.add("innerRadius", function(innerRadius, target){
      return am4core.percent(40);
    })

    pieSeries2.adapter.add("innerRadius", function(innerRadius, target){
      return am4core.percent(60);
    })

    pieSeries.adapter.add("radius", function(innerRadius, target){
      return am4core.percent(100);
    })

    pieSeries2.adapter.add("radius", function(innerRadius, target){
      return am4core.percent(80);
    })
  }

  getChartBar2Billing() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartBar2Billing", am4charts.XYChart);

    // Add percent sign to all numbers
    chart.numberFormatter.numberFormat = "#.#'%'";

    // Add data
    chart.data = [{
        "days": "Monday",
        "insurance": 3.5,
        "cash": 4.2
    }, {
        "days": "Tuesday",
        "insurance": 1.7,
        "cash": 3.1
    }, {
        "days": "Wednesday",
        "insurance": 2.8,
        "cash": 2.9
    }, {
        "days": "Thursday",
        "insurance": 2.6,
        "cash": 2.3
    }, {
        "days": "Friday",
        "insurance": 1.4,
        "cash": 2.1
    },{
        "days": "Saturday",
        "insurance": 1.4,
        "cash": 2.1
    },{
        "days": "Sunday",
        "insurance": 2.6,
        "cash": 4.9
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "days";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Daily Transaction";
    //valueAxis.title.fontWeight = 800;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "insurance";
    series.dataFields.categoryX = "days";
    series.clustered = false;
    series.tooltipText = "Daily Transaction on {categoryX} (Insurance) : [bold]{valueY}[/]";

    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "cash";
    series2.dataFields.categoryX = "days";
    series2.clustered = false;
    series2.columns.template.width = am4core.percent(50);
    series2.tooltipText = "Daily Transaction on {categoryX} (Cash) : [bold]{valueY}[/]";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;
      }

}
