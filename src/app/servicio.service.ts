import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private _libros: any[];

  private _libros$: Subject<any[]>;

  constructor() {
    this._libros = [
      { id: 1, titulo: "El señor de los anillos", autor: "J.R.R Tolk", fecha: new Date(2023, 4, 1), categoria: "Ficción"},
      { id: 2, titulo: "La comunidad de la roca", autor: "Robert Louis Stevenson", fecha: new Date(2023, 5, 1), categoria: "Ficción"},
      { id: 3, titulo: "Cien años de soledad", autor: "Gabriel Garcia Marquez", fecha: new Date(2020, 6, 1), categoria: "Ficción"},
      { id: 4, titulo: "Pride and Prejudice", autor: "Jane Austen", fecha: new Date(2013, 0, 1), categoria: "Ficción"},
      { id: 5, titulo: "Harry Potter y el prisionero de Azkaban", autor: "Mary", fecha: new Date(2003, 7, 1), categoria: "Ficción"}
    ];
    this._libros$ = new Subject();
  }


  getLibros(): any[] {
    return [...this._libros]
  }

  getLibros$(): Observable<any[]> {
    return this._libros$.asObservable();
  }

  getNovedades(): any[]{
    const novedades: any[] = [];
    const ANO_LIMITE:number= 2023;
    this._libros.forEach(libro => {
      if (libro.fecha.getFullYear()>=ANO_LIMITE) {
        novedades.push(libro);
      }
    });
    return novedades;
  }
  
}
