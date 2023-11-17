import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent {

  constructor(private servicio: ServicioService) { }

  buscarLibro(titulo: string) {
    if (titulo == "") {
      this.servicio.getLibros();
    } else {
      this.servicio.getLibroBuscado(titulo);
    }
  }

}
