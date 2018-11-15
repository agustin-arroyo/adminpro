import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-change-progress-bar',
  templateUrl: './change-progress-bar.component.html',
  styles: []
})

export class ChangeProgressBarComponent implements OnInit {

  @ViewChild('textProgress') textProgress: ElementRef;

  // Input
  @Input() legend: string = 'Leyenda';
  @Input() progress: number = 50;

  // Output
  @Output() changeProgressData: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('ChangeProgressBarComponent | constructor');
    // console.log('Leyenda ', this.legend);
    // console.log('Progress ', this.progress);
   }

  ngOnInit() {
    // console.log('ChangeProgressBarComponent | ngOnInit');
    // console.log('Leyenda ', this.legend);
    // console.log('Progress ', this.progress);
  }

  changeProgressValue( value ) {

    this.progress = this.progress + value;

    if (this.progress <= 0) {
      this.progress = 0;
    }

    if (this.progress >= 100) {
      this.progress = 100;
    }

    console.log(this.progress);
    this.changeProgressData.emit( this.progress );

  } // changeProgressValue

  onChangeValue( newalue: number ) {

    // let elementHTML: any = document.getElementsByName('progress')[0];
    // console.log( this.textProgress );


    if ( newalue >= 100) {
      this.progress = 100;
    } else if ( newalue <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = newalue;
    }

    // elementHTML.value = Number( this.progress );

    this.textProgress.nativeElement.focus();
    this.textProgress.nativeElement.value = this.progress;
    this.changeProgressData.emit( this.progress );


  }

}
