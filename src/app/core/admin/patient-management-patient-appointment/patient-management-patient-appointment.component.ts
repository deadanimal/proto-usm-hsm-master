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
  selector: 'app-patient-management-patient-appointment',
  templateUrl: './patient-management-patient-appointment.component.html',
  styleUrls: ['./patient-management-patient-appointment.component.scss']
})
export class PatientManagementPatientAppointmentComponent implements OnInit {
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
      patient: "Ali",
      doctor: "Dr Ahmad",
      date: "1/1/2020",
      time: "10.00 A.M.",
      status: "Pending"
    },
    {
      patient: "Sarah",
      doctor: "Dr Nina",
      date: "11/2/2020",
      time: "10.00 A.M.",
      status: "Arrived"
    },
    {
      patient: "Lee",
      doctor: "Dr Arumugam",
      date: "23/6/2020",
      time: "10.00 A.M.",
      status: "Cancelled"
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
    this.getChartBar1Appointment()
    this.getChartDonut1Appointment()
    this.getChartPie1Appointment()
  }

  getChartBar1Appointment() {
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_kelly);
    // Themes end

    let chart = am4core.create("chartBar1Appointment", am4charts.XYChart);

    chart.data = [{
    "time": "8 A.M.",
    "visits": 2025
    }, {
    "time": "9 A.M.",
    "visits": 1882
    }, {
    "time": "10 A.M.",
    "visits": 1809
    }, {
    "time": "11 A.M.",
    "visits": 1322
    }, {
    "time": "12 P.M.",
    "visits": 1122
    }, {
    "time": "1 P.M.",
    "visits": 1114
    }, {
    "time": "2 P.M.",
    "visits": 984
    }, {
    "time": "3 P.M.",
    "visits": 711
    }, {
    "time": "4 P.M.",
    "visits": 665
    }, ];

    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "time";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    //valueAxis.rangeChangeEasing = am4core.ease.linear;
    //valueAxis.rangeChangeDuration = 1500;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "time";
    series.dataFields.valueY = "visits";
    series.tooltipText = "{valueY.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.cornerRadiusTopLeft = 10;
    //series.interpolationDuration = 1500;
    //series.interpolationEasing = am4core.ease.linear;
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.verticalCenter = "bottom";
    labelBullet.label.dy = -10;
    labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

    chart.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
    });

    setInterval(function () {
    am4core.array.each(chart.data, function (item) {
      item.visits += Math.round(Math.random() * 200 - 100);
      item.visits = Math.abs(item.visits);
    })
    chart.invalidateRawData();
    }, 2000)

    categoryAxis.sortBySeries = series;
  }

  getChartDonut1Appointment() {
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    let chart = am4core.create("chartDonut1Appointment", am4charts.PieChart);
    
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
      "category": "Ontime + Delay",
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
      "category": "Ontime",
      "value": 30
    }, {
      "category": "Delay",
      "value": 30
    }, {
      "category": "Remaining",
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

  getChartPie1Appointment() {
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartPie1Appointment", am4charts.PieChart);

    // Add data
    chart.data = [ {
      "category": "1",
      "percent": 501.9
    }, {
      "category": "2",
      "percent": 301.9
    }, {
      "category": "3",
      "percent": 201.1
    }, {
      "category": "4",
      "percent": 165.8
    },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "category";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
  }

}
