import { Injectable } from '@angular/core';
import { Infraccion } from './infraccion';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfraccionesService {

  infracciones:Array<Infraccion> = [];
  constructor(private http:HttpClient) { 

  }

  getInfracciones():Observable<any>{
    return of([]);
  }
}