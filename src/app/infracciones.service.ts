import { Injectable } from '@angular/core';
import { Infracciones } from './infracciones';
import { Infraccion } from './infraccion';

@Injectable({
  providedIn: 'root'
})
export class InfraccionesService {

  infracciones:Array<Infraccion> = [];
  constructor() { 
    const infracciones = [ 
      { "fecha": "2019-05-01", "detalles":{ "modelo": "Ford Ka", "calle": "Riobamba 2123" }, "velocidad": 100 , "patente": "AA 456 AA" },
      { "fecha": "2019-06-01", "detalles":{ "modelo": "Toyota Etios", "calle": "Riobamba 2123" }, "velocidad": 110 , "patente": "PA 456 AB" },
      { "fecha": "2019-07-02", "detalles":{ "modelo": "Volkswagen Gol", "calle": "Riobamba 2123" }, "velocidad": 130 , "patente": "AA 456 AC" },
      { "fecha": "2019-08-10", "detalles":{ "modelo": "Chevrolet Onix", "calle": "Riobamba 2123" }, "velocidad": 150 , "patente": "MA 456 AD" },
      { "fecha": "2019-01-07", "detalles":{ "modelo": "Renault Nuevo Sandero", "calle": "Riobamba 2123" }, "velocidad": 60 , "patente": "AA 456 AE" },
      { "fecha": "2019-02-09", "detalles":{ "modelo": "Renault Kwid", "calle": "Riobamba 2123" }, "velocidad": 80 , "patente": "NA 456 AF" },
      { "fecha": "2019-03-16", "detalles":{ "modelo": "Volkswagen Amarok", "calle": "Riobamba 2123" }, "velocidad": 70 , "patente": "AA 456 AG" },
      { "fecha": "2019-05-17", "detalles":{ "modelo": "Peugeot 208", "calle": "Riobamba 2123" }, "velocidad": 90 , "patente": "AY 458 AA" },
      { "fecha": "2019-06-02", "detalles":{ "modelo": "Fiat Cronos", "calle": "Riobamba 2123" }, "velocidad": 110 , "patente": "HA 458 YT" },
      { "fecha": "2019-10-03", "detalles":{ "modelo": "Toyota Hilux", "calle": "Riobamba 2123" }, "velocidad": 40 , "patente": "BA 459 TR" },
      { "fecha": "2019-11-05", "detalles":{ "modelo": "Chevrolet Onix", "calle": "Riobamba 2123" }, "velocidad": 85 , "patente": "AA 459 FR" },
      { "fecha": "2019-03-11", "detalles":{ "modelo": "Renault Nuevo Sandero", "calle": "Riobamba 2123" }, "velocidad": 75 , "patente": "AA 477 GG" },
      { "fecha": "2019-02-10", "detalles":{ "modelo": "Toyota Etios", "calle": "Riobamba 2123" }, "velocidad": 100 , "patente": "AA 499 FF" },
    ]

    infracciones.forEach(element => {
      const infraccion = new Infraccion(element.fecha, element.detalles, element.velocidad, element.patente);
      this.infracciones.push(infraccion);
    });

  }

  getInfracciones():Array<Infraccion>{
    return this.infracciones
  }

}
