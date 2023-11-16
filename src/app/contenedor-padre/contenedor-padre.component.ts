import { Component } from '@angular/core';

@Component({
  selector: 'contenedor-padre',
  templateUrl: './contenedor-padre.component.html',
  styleUrls: ['./contenedor-padre.component.css']
})
export class ContenedorPadreComponent {

  private mostrar:Boolean = false;

  cambiarEstado(estado:any){
    this.mostrar = estado;
  }

  getEstado(){
    return this.mostrar;
  }

}
