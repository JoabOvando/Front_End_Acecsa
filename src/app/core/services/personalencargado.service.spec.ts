import { TestBed } from '@angular/core/testing';

import { PersonalencargadoService } from './personalencargado.service';

describe('PersonalencargadoService', () => {
  let service: PersonalencargadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalencargadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
