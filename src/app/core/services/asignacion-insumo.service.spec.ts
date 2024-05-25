import { TestBed } from '@angular/core/testing';

import { AsignacionInsumoService } from './asignacion-insumo.service';

describe('AsignacionInsumoService', () => {
  let service: AsignacionInsumoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacionInsumoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
