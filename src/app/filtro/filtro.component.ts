import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html' ,
  styleUrls: ['./filtro.component.scss'],
  
})


export class FiltroComponent implements OnInit {
  
  @Input () datos_tabla:Tarea []=[];
  @Output() buscarFiltro = new EventEmitter<Tarea>();
  
  constructor(public miServ:DatosService){

  }

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
 
  

  ngOnInit(): void {
    
    this.filtro_datos=this.datos_tabla;
  }



  buscar(){
   
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
