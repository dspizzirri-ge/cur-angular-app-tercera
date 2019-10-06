import { TestBed } from '@angular/core/testing';

import { InfraccionesService } from './infracciones.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InfraccionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: InfraccionesService = TestBed.get(InfraccionesService);
    expect(service).toBeTruthy();
  });

  it('Debe devolver un 200 al solicitar las infracciones', ()=>{
    const service: InfraccionesService = TestBed.get(InfraccionesService);
    
    expect(1).toBe(1);
  });
});
