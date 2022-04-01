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
    'fecha':'',


  };
 filtro_datos:any;
 
  constructor() { }

  ngOnInit(): void {
    this.filtro_datos=this.datos_tabla;
  }

  vaciar(){

  }

  buscar(){
    console.log(this.filtro.cliente)
    this.filtro_datos=[];
    this.filtro_datos=this.filtro;
    this.buscarFiltro.emit(this.filtro_datos);
    this.filtro={
      'cliente': '',
      'usuario': '',
      'referencia':'',
      'tipo':'',
      'fecha':'',
  
  
    };

    
  }

} 
