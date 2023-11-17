import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contenedor-libros',
  templateUrl: './contenedor-libros.component.html',
  styleUrls: ['./contenedor-libros.component.css']
})
export class ContenedorLibrosComponent implements OnInit{

  catalogo?: any[];
  suscripcion!: Subscription;

  constructor(private servicio: ServicioService) { 
    this.catalogo = this.servicio.getListaInicial();
  }

  ngOnInit(): void {
    this.suscripcion = this.servicio.getLibros$().subscribe(updatedLibros => { this.catalogo = updatedLibros;});
  }

}
