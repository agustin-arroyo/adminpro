import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progress1: number = 20;
  progress2: number = 30;

  constructor() { }

  ngOnInit() {
  }

  updateProgressValue1( event: number ) {
      // console.log('updateProgressValue: ', event);
      this.progress1 = event;
  }

  updateProgressValue2( event: number ) {
    // console.log('updateProgressValue: ', event);
    this.progress2 = event;
}


}
