import { Component, OnInit } from '@angular/core';
import { InfraccionesService } from '../infracciones.service';
import { Infracciones } from '../infracciones';
import { DetalleInfracciones } from '../detalle-infracciones';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  datos:Array<Infracciones>
  
  limite:number = 0;
  detalleRegistro:DetalleInfracciones;

  constructor(private infracciones: InfraccionesService) { 

    console.log("Constructor"); 
    this.datos = this.infracciones.getInfracciones()
      .sort((a:Infracciones,b:Infracciones)=> {return a.velocidad > b.velocidad? -1:1});
  }

  ngOnInit() {
    
    console.log("ngOnInit");
  }

  verDetalle = registro => {
    this.detalleRegistro = registro;
  }
}
