import { Injectable } from '@angular/core';
import { Infraccion } from './infraccion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfraccionesService {

  infracciones:Array<Infraccion> = [];
  constructor(private http:HttpClient) { 
  
  }

  getInfracciones():Observable<any>{
    return this.http.get("../assets/infracciones/072019/data.json");
  }

}