import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorLibrosComponent } from './contenedor-libros.component';

describe('ContenedorLibrosComponent', () => {
  let component: ContenedorLibrosComponent;
  let fixture: ComponentFixture<ContenedorLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorLibrosComponent]
    });
    fixture = TestBed.createComponent(ContenedorLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
