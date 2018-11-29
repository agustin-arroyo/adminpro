import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

    this.contadorDeSegundos(5).then(
        mensaje => console.log('Terminó !!!', mensaje)
    )
    .catch( error => console.log('Error en la promesa', error));

  } // export

  ngOnInit() {
  }

  contadorDeSegundos (segundos: number ): Promise<boolean> {

    return new Promise ( ( resolve ) => {

        let contador = 0;

        const intervalo = setInterval( () => {

        contador += 1;
        console.log(contador);

        if (contador === segundos) {
          resolve(true);
          // reject('por error');
          clearInterval(intervalo);
        }

      },
      1000 );

    });

  }

}
