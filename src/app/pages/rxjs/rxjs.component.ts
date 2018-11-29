import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscriber, Subscription } from 'rxjs'; // only need to import from rxjs
import { retry, map, filter } from 'rxjs/operators'; // only need to import from rxjs

@Component({
  selector: 'app-rxjs.component',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
   } // constructor

  ngOnInit() {

    console.log('RxjsComponent | ngOnInit');

    this.subscription = this.regresaObservable().subscribe(
      numero => console.log( 'Subs ', numero ),
      error => console.log( ' Error ', error),
      () => console.log( 'El observador terminó!' )
    );

  } // ngOnInit

  ngOnDestroy() {
    console.log('RxjsComponent | ngOnDestroy');
    this.subscription.unsubscribe();
  }


  regresaObservable(): Observable<any> {

        return new Observable( (observer: Subscriber<any>) => {

              let contador = 0;
              const intervalo = setInterval( () => {

                contador ++;

                const salida = {
                  valor: contador
                };

                observer.next( salida );

                // if ( contador === 3 ) {
                //   clearInterval( intervalo );
                //   observer.complete();
                // }

              }, 1000);

        }).pipe(
          map( respuesta => respuesta.valor),
          filter( ( valor, index ) => {
            // console.log('Filter', valor, index + 1);

            if ( (valor % 2) === 1 ) {
              // impar
              return true;
            } else {
              // par
              return false;
            }
          })

        );

  } // regresaObservable

} // export
