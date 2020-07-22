import { TestBed } from '@angular/core/testing';

import { ServicioEventoService } from './servicio-evento.service';

describe('ServicioEventoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioEventoService = TestBed.get(ServicioEventoService);
    expect(service).toBeTruthy();
  });
});
