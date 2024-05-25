import { TestBed } from '@angular/core/testing';

import { AsignacionRecursoService } from './asignacion-recurso.service';

describe('AsignacionRecursoService', () => {
  let service: AsignacionRecursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacionRecursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
