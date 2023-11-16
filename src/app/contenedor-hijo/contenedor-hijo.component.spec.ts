import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorHijoComponent } from './contenedor-hijo.component';

describe('ContenedorHijoComponent', () => {
  let component: ContenedorHijoComponent;
  let fixture: ComponentFixture<ContenedorHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorHijoComponent]
    });
    fixture = TestBed.createComponent(ContenedorHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
