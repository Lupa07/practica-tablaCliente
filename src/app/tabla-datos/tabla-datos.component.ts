import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss']
})

export class TablaDatosComponent implements OnInit {

  @Input () datos_tabla:Tarea[]=[];
  public page: number=0;
  

  
  constructor() { }

  ngOnInit(): void {
    
  }

 /* extraerhora(fecha: String) {
    let hora_extraida = fecha.substring(11, 16);
    return hora_extraida;
  }*/

 /* extraerfecha(fecha: String) {
    let fecha_extraida = fecha.substring(8, 10);
    let mes_numero = fecha.substring(5, 7);
    switch (mes_numero) {
      case '01':
        fecha_extraida = fecha_extraida + ' enero';
        break;
      case '02':
        fecha_extraida = fecha_extraida + ' febrero';
        break;
      case '03':
        fecha_extraida = fecha_extraida + ' marzo';
        break;
      case '04':
        fecha_extraida = fecha_extraida + ' abril';
        break;
      case '05':
        fecha_extraida = fecha_extraida + ' mayo';
        break;
      case '06':
        fecha_extraida = fecha_extraida + ' junio';
        break;
      case '07':
        fecha_extraida = fecha_extraida + ' jul.';
        break;
      case '08':
        fecha_extraida = fecha_extraida + ' ago.';
        break;
      case '09':
        fecha_extraida = fecha_extraida + ' sep.';
        break;
      case '10':
        fecha_extraida = fecha_extraida + ' oct.';
        break;
      case '11':
        fecha_extraida = fecha_extraida + ' nov.';
        break;
      case '12':
        fecha_extraida = fecha_extraida + ' dic.';
        break;
    }
    fecha_extraida = fecha_extraida + ' ' + fecha.substring(2, 4);
    return fecha_extraida;
  }*/

  
  
}


