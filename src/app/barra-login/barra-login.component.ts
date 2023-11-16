import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'barra-login',
  templateUrl: './barra-login.component.html',
  styleUrls: ['./barra-login.component.css']
})
export class BarraLoginComponent {

  private habilitarComponentes: Boolean;
  @Output() visualizarEmitido = new EventEmitter<Boolean>();

  constructor(){
    this.habilitarComponentes = false;
  }

  getVisibilidad(){
    return this.habilitarComponentes;
  }

  cambiarVisibilidadComponentes(){
    this.habilitarComponentes = !this.habilitarComponentes;
    return this.habilitarComponentes;
  }

  emitirDato() {
    this.visualizarEmitido.emit(this.cambiarVisibilidadComponentes());
  } 

}
