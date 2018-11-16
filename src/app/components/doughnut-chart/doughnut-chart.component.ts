import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: []
})
export class DoughnutChartComponent implements OnInit {

  // Doughnut
  @Input() public doughnutChartLabels: string[] = [];
  @Input() public doughnutChartData: number[] = [];
  @Input() public doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
