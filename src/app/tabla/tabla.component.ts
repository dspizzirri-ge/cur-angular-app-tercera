import { Component, OnInit } from '@angular/core';
import { InfraccionesService } from '../servicios/infracciones.service';
import { Infracciones } from '../interfaces/infracciones';
import { DetalleInfracciones } from '../interfaces/detalle-infracciones';
import { Infraccion } from '../modelos/infraccion';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  datos: Array<Infracciones>

  limite: number = 0;
  detalleRegistro: DetalleInfracciones;

  constructor(private infracciones: InfraccionesService) {

    console.log("Constructor");
    this.infracciones.getInfracciones()
      .subscribe(data => {
        data.sort((a: Infracciones, b: Infracciones) => { return a.velocidad > b.velocidad ? -1 : 1 });
        this.datos = new Array();
        data.forEach(element => {
          const infraccion = new Infraccion(element.fecha, element.detalles, element.velocidad, element.patente);
          this.datos.push(infraccion);
        });
      });
  }

  ngOnInit() {

    console.log("ngOnInit");
  }

  verDetalle = registro => {
    this.detalleRegistro = registro;
  }
}
