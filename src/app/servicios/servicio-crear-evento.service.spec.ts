import { TestBed } from '@angular/core/testing';

import { ServicioCrearEventoService } from './servicio-crear-evento.service';

describe('ServicioCrearEventoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioCrearEventoService = TestBed.get(ServicioCrearEventoService);
    expect(service).toBeTruthy();
  });
});
