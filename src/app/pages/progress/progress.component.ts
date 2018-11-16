import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
}) // Component

export class ProgressComponent implements OnInit {

  progress1: number = 20;
  progress2: number = 30;

  constructor() { } // constructor

  ngOnInit() {
  } // ngOnInit

  updateProgressValue1( event: number ) {
      // console.log('updateProgressValue: ', event);
      this.progress1 = event;
  } // updateProgressValue1

  updateProgressValue2( event: number ) {
    // console.log('updateProgressValue: ', event);
    this.progress2 = event;
  } // updateProgressValue1

} // export
