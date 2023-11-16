import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private librosSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  libros$: Observable<any[]> = this.librosSubject.asObservable();

  constructor() {
    
  }

  getLibros(): Observable<any[]> {
    return this.libros$;
  }

}
