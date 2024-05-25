import { TestBed } from '@angular/core/testing';

import { AsignacionVehiculoService } from './asignacion-vehiculo.service';

describe('AsignacionVehiculoService', () => {
  let service: AsignacionVehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacionVehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
