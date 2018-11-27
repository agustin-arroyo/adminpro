import { Component, OnInit } from '@angular/core';
import { SetingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _appSettings: SetingsService) { }

  ngOnInit() {
    this.setThemeChecked();
  }

  changeTheme( themeSelected: string, link: any) {
      console.log(themeSelected);
      this.applyChecked(link);
      this._appSettings.applyThem(themeSelected);
  }

  applyChecked(link: any) {

    const selectors: any = document.getElementsByClassName('selector');

    for (const ref of selectors ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  setThemeChecked() {
    const selectors: any = document.getElementsByClassName('selector');

    const them = this._appSettings.appSettings.them;
    for (const ref of selectors ) {
        if (ref.getAttribute('data-theme') === them) {
          ref.classList.add('working');
          break;
        }
    }

  }


}
