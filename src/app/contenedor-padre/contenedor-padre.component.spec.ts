import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPadreComponent } from './contenedor-padre.component';

describe('ContenedorPadreComponent', () => {
  let component: ContenedorPadreComponent;
  let fixture: ComponentFixture<ContenedorPadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorPadreComponent]
    });
    fixture = TestBed.createComponent(ContenedorPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
