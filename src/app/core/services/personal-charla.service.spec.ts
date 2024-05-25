import { TestBed } from '@angular/core/testing';

import { PersonalCharlaService } from './personal-charla.service';

describe('PersonalCharlaService', () => {
  let service: PersonalCharlaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalCharlaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
