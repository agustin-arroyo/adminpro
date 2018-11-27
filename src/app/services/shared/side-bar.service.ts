import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  menu: any = [
  {
    title: 'Principal',
    icon: 'mdi mdi-gauge',
    submenu: [
      { title: 'Dashboard', url: '/dashboard' },
      { title: 'Progreso', url: '/progress'} ,
      { title: 'Gráficos', url: '/graphs001'}
    ]
  }];

  constructor() { }
}
