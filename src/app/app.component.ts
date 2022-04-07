import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practica-tablaCliente';

 
  filtrado: any;
  datosAmandar: Tarea[] = []
  tareas: Tarea[]=[]

  ngOnInit(): void {
    // this.datos.forEach( (s) => {this.tareas.push(new Tarea(s))} );
    // this.ordenarPorFecha(this.tareas)
    // this.datosAmandar = this.tareas;
  }

  ordenarPorFecha(datos: any[]) {
   
    datos.sort(function (dato1,dato2) {
      if (dato1.fecha < dato2.fecha) {
        return -1
      } else if (dato1.fecha > dato2.fecha) {
        return 1
      } else {
        return 0
      }
    })
  }





  // buscarFiltroMaestro(buscarFiltro: any) {
  //   this.filtrado = Object.assign({}, buscarFiltro);
  //   this.cargarDatos();

  // }

  // cargarDatos() {
  //   this.datosAmandar = [];

  //   for (let i = 0; i < this.datos.length; i++) {

  //     if (this.tareas[i].alias_cliente.toLowerCase().indexOf(this.filtrado.cliente.toLowerCase()) >= 0) {
  //       if (this.tareas[i].usuario.toLowerCase().indexOf(this.filtrado.usuario.toLowerCase()) >= 0) {
  //         if (this.tareas[i].referencia.toLowerCase().indexOf(this.filtrado.referencia.toLowerCase()) >= 0) {
  //           if (this.tareas[i].tipo.toLowerCase().indexOf(this.filtrado.tipo.toLowerCase()) >= 0) {
  //             if (this.filtraEstado(this.tareas[i].estado)) {
  //               if (this.filtraFecha(this.tareas[i].fecha)) {
  //                 this.datosAmandar.push(this.tareas[i])
  //               }

  //             }

  //           }

  //         }
  //       }
  //     }
  //   }
  // }
  filtraFecha(fecha: string) {
    
    let fechaDatos = new Date(fecha)
   
    if (this.filtrado.fecha.length === 0) {
     
      return true
    } else {
      
      if (this.filtrado.fecha[0] <= fechaDatos && this.filtrado.fecha[1] >= fechaDatos) {
        
        return true
      }

    }
    return false
  }
  filtraEstado(estado: string) {

    if (this.filtrado.pendiente) {

      if (estado.toLowerCase() == "pendiente") {

        return true
      }
    }

    if (this.filtrado.recogiendo) {
      if (estado.toLowerCase() == 'recogiendo') {
        return true
      }
    }
    if (this.filtrado.recogida) {
      if (estado.toLowerCase() == 'recogida') {
        return true;
      }
    }
    if (this.filtrado.desconsolidando) {
      if (estado.toLowerCase() == 'desconsolidando') {
        return true
      }
    }
    if (this.filtrado.desconsolidada) {
      if (estado.toLowerCase() == 'desconsolidada') {
        return true
      }
    }
    if (this.filtrado.entregada) {
      if (estado.toLowerCase() == 'entregada') {
        return true
      }
    }
    if (this.filtrado.incidencia) {
      if (estado.toLowerCase() == 'incidencia') {
        return true;
      }
    }
    if (!this.filtrado.pendiente && !this.filtrado.recogiendo && !this.filtrado.recogida && !this.filtrado.desconsolidando && !this.filtrado.desconsolidada && !this.filtrado.entregada && !this.filtrado.incidencia) {
      return true;
    }

    return false;
  }

}
