import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorPadreComponent } from './contenedor-padre/contenedor-padre.component';
import { BarraLoginComponent } from './barra-login/barra-login.component';
import { ContenedorHijoComponent } from './contenedor-hijo/contenedor-hijo.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { ContenedorLibrosComponent } from './contenedor-libros/contenedor-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorPadreComponent,
    BarraLoginComponent,
    ContenedorHijoComponent,
    BarraBusquedaComponent,
    ContenedorLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
