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
      { id: 1, titulo: "El señor de los anillos", autor: "J.R.R Tolk"},
      { id: 2, titulo: "La comunidad de la roca", autor: "Robert Louis Stevenson"},
      { id: 3, titulo: "Cien años de soledad", autor: "Gabriel Garcia Marquez"},
      { id: 4, titulo: "Pride and Prejudice", autor: "Jane Austen"},
      { id: 5, titulo: "Harry Potter y el prisionero de Azkaban", autor: "Mary"},
      { id: 6, titulo: "Las crónicas de Narnia", autor: "Mary Pan"}
    ];
    this._libros$ = new Subject<any[]>();
  }

  getListaInicial(){
    return [...this._libros];
  }

  getLibros(){
    this._libros$.next(this.getListaInicial());
  }

  getLibros$(): Observable<any[]> {
    return this._libros$.asObservable();
  }

  getLibroBuscado(titulo: string) {
    let objetos: any[] = this._libros;
    objetos = this._libros.filter(libro => libro.titulo.startsWith(titulo));
    this._libros$.next(objetos);
  }
  
}
