import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'contenedor-libros',
  templateUrl: './contenedor-libros.component.html',
  styleUrls: ['./contenedor-libros.component.css']
})
export class ContenedorLibrosComponent implements OnInit{

  catalogo?: any[];

  constructor(private servicio: ServicioService) { }

  ngOnInit(): void {
    this.catalogo = this.servicio.getLibros();

    this.servicio.getLibros$().subscribe(updatedLibros => {
      this.catalogo = updatedLibros;
    });

  }

}
