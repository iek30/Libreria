import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'contenedor-libros',
  templateUrl: './contenedor-libros.component.html',
  styleUrls: ['./contenedor-libros.component.css']
})
export class ContenedorLibrosComponent {

  libros: any[] = [];

  constructor(private servicio: ServicioService) { }

  ngOnInit(): void {
    this.servicio.getLibros().subscribe(libros => {
      this.libros = libros;
    });
  }

}
