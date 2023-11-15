import { Component } from '@angular/core';

@Component({
  selector: 'barra-login',
  templateUrl: './barra-login.component.html',
  styleUrls: ['./barra-login.component.css']
})
export class BarraLoginComponent {

  habilitarComponentes: Boolean;

  constructor(){
    this.habilitarComponentes = false;
  }

  cambiarVisibilidadComponentes(){
    this.habilitarComponentes = !this.habilitarComponentes;
    return this.habilitarComponentes;
  }

}
