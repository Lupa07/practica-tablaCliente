import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html' ,
  styleUrls: ['./filtro.component.scss'],
  
})


export class FiltroComponent implements OnInit {
  
  @Input () datos_tabla:any;
  @Output() buscarFiltro = new EventEmitter<any>();
  filtro:any = {
    'cliente': '',
    'usuario': '',
    'referencia':'',
    'tipo':'',
    'fecha':[],
    'pendiente: boolean':false,
    'recogiendo:boolean' : false,
    'recogida:boolean' : false,
    'desconsolidando:boolean ': false,
    'desconsolidada:boolean' : false,
    'entregada:boolean' :false,
    'incidencia:boolean' : false


  };
 filtro_datos:any;
 
  constructor() { }

  ngOnInit(): void {
    
    this.filtro_datos=this.datos_tabla;
  }



  buscar(){
   
    console.log(this.filtro.fecha[0], 'posicion 0 en funcion buscar')
    console.log(this.filtro.fecha[1], 'posicion 1 en funcion buscar')
    this.filtro_datos=[];
    this.filtro_datos=this.filtro;
    this.buscarFiltro.emit(this.filtro_datos);
    
    this.filtro={
      'cliente': '',
      'usuario': '',
      'referencia':'',
      'tipo':'',
      'fecha':[],
      'pendiente':false,
      'recogiendo': false,
      'recogida': false,
      'desconsolidando': false,
      'desconsolidada' : false,
      'entregada' :false,
      'incidencia' : false
  
    };
    

    
  }

} 
