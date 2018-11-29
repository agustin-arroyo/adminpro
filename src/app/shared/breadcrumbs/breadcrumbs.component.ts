import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { retry, map, filter } from 'rxjs/operators'; // only need to import from rxjs
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  pageName: string;

  constructor( private router: Router,
               private title: Title,
               private meta: Meta  ) {

    this.getRouterData().subscribe( data => {
      // console.log('BreadcrumbsComponent', data);
      this.pageName = data.title;
      this.title.setTitle( this.pageName + ' | Admin Pro' );

      const metaTag: MetaDefinition = {
          name: 'description',
          content: this.pageName
      };

      this.meta.updateTag( metaTag );

    });

  } // constructor

  ngOnInit() {
  } // ngOnInit

  getRouterData() {

    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    );

  } // getRouterData

} // export
