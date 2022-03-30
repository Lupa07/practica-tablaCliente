import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FiltroComponent } from './filtro/filtro.component';
import { TablaDatosComponent } from './tabla-datos/tabla-datos.component';
import {NgxPaginationModule} from "ngx-pagination"; 

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FiltroComponent,
    TablaDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
