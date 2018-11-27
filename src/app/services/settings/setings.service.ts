import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class SetingsService {

  appSettings: AppSettings = {
    themUrl : 'assets/css/colors/default',
    them : 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.loadAppSettings();
  }

  saveAppSetting() {
    // console.log('saveSetting');
    localStorage.setItem('appSettings', JSON.stringify(this.appSettings) );
  }

  loadAppSettings () {
    if (localStorage.getItem('appSettings' )) {
      this.appSettings = JSON.parse(localStorage.getItem('appSettings'));
      // console.log('loadAppSettings');
      // console.log(this.appSettings);
    } else {
      // console.log('Default Values');
      // console.log(this.appSettings);
    }
    this.applyThem(this.appSettings.them);

  }

  applyThem( them: any) {
    const themeURL = `assets/css/colors/${them}.css`;
    this._document.getElementById('themeLink').setAttribute('href', themeURL);
    this.appSettings.them = them;
    this.appSettings.themUrl = themeURL;
    this.saveAppSetting();
  }

}

interface AppSettings {
  themUrl: string;
  them: string;
}
