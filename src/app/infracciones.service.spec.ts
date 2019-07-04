import { TestBed } from '@angular/core/testing';

import { InfraccionesService } from './infracciones.service';

describe('InfraccionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfraccionesService = TestBed.get(InfraccionesService);
    expect(service).toBeTruthy();
  });
});
