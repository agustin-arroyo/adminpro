import { Component } from '@angular/core';
import { SetingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin Pro';

  constructor( public appSettings: SetingsService) { }
}
