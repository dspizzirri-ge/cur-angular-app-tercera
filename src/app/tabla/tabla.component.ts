import { Component, OnInit } from '@angular/core';
import { InfraccionesService } from '../infracciones.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  datos:Array<any>
  
  limite:number = 0;
  detalleRegistro:any;

  constructor(private infracciones: InfraccionesService) { 
    
    console.log("Constructor"); 
    this.datos = this.infracciones.getInfracciones()
      .sort((a,b)=> {return a.velocidad > b.velocidad? -1:1});
  }

  ngOnInit() {
    
    console.log("ngOnInit");
  }

  verDetalle = registro => {
    this.detalleRegistro = registro;
  }
}
