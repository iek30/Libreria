import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorPadreComponent } from './contenedor-padre/contenedor-padre.component';
import { BarraLoginComponent } from './barra-login/barra-login.component';
import { ContenedorHijoComponent } from './contenedor-hijo/contenedor-hijo.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { ContenedorLibrosComponent } from './contenedor-libros/contenedor-libros.component';
import { ServicioService } from './servicio.service';
import { HttpClientModule } from '@angular/common/http';

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
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
