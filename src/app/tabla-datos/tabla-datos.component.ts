import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss']
})
export class TablaDatosComponent implements OnInit {

  @Input () datos_tabla:any;
  public page: number=0;
  constructor() { }

  ngOnInit(): void {
  }


}
