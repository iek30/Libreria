import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorPadreComponent } from './contenedor-padre/contenedor-padre.component';
import { BarraLoginComponent } from './barra-login/barra-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorPadreComponent,
    BarraLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
