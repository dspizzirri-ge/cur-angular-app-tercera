import { Infracciones } from './infracciones';
import { DetalleInfracciones } from './detalle-infracciones';

export class Infraccion implements Infracciones{

    _fecha:string;
    _detalles:DetalleInfracciones;
    _velocidad:number;
    _patente:string;

    constructor( fecha: string, 
        detalles: DetalleInfracciones,
        velocidad: number,
        patente: string ){
            this._fecha = fecha;
            this._detalles = detalles;
            this._velocidad = velocidad;
            this._patente = patente;
        }
        
    get fecha(){ return this._fecha; }    
    set fecha(fecha){ this._fecha = fecha; }

    get detalles(){ return this._detalles; }
    set detalles(detalles){ this._detalles = detalles}

    get velocidad(){ return this._velocidad; }
    set velocidad(detalles){ this._velocidad = detalles}

    get patente(){ return this._patente; }
    set patente(patente){ this._patente = patente}
}
