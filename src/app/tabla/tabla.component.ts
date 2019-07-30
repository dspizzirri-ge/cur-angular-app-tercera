import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  limite:number = 0;

  datos:Array<any> = [ 
    { "fecha": "2019-05-01", "modelo": "Ford Ka" , "velocidad": 100 , "patente": "AA 456 AA" },
    { "fecha": "2019-06-01", "modelo": "Toyota Etios" , "velocidad": 110 , "patente": "PA 456 AB" },
    { "fecha": "2019-07-02", "modelo": "Volkswagen Gol" , "velocidad": 130 , "patente": "AA 456 AC" },
    { "fecha": "2019-08-10", "modelo": "Chevrolet Onix" , "velocidad": 150 , "patente": "MA 456 AD" },
    { "fecha": "2019-01-07", "modelo": "Renault Nuevo Sandero" , "velocidad": 60 , "patente": "AA 456 AE" },
    { "fecha": "2019-02-09", "modelo": "Renault Kwid" , "velocidad": 80 , "patente": "NA 456 AF" },
    { "fecha": "2019-03-16", "modelo": "Volkswagen Amarok" , "velocidad": 70 , "patente": "AA 456 AG" },
    { "fecha": "2019-05-17", "modelo": "Peugeot 208" , "velocidad": 90 , "patente": "AY 458 AA" },
    { "fecha": "2019-06-02", "modelo": "Fiat Cronos" , "velocidad": 110 , "patente": "HA 458 YT" },
    { "fecha": "2019-10-03", "modelo": "Toyota Hilux" , "velocidad": 40 , "patente": "BA 459 TR" },
    { "fecha": "2019-11-05", "modelo": "Toyota Hilux" , "velocidad": 85 , "patente": "AA 459 FR" },
    { "fecha": "2019-03-11", "modelo": "Renault Nuevo Sandero" , "velocidad": 75 , "patente": "AA 477 GG" },
    { "fecha": "2019-02-10", "modelo": "Toyota Etios" , "velocidad": 100 , "patente": "AA 499 FF" },
  ].sort(
    (a,b)=> { 
      return (a.velocidad > b.velocidad)? -1:1
    });

  constructor() { 
    console.log("Constructor"); 
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
}
