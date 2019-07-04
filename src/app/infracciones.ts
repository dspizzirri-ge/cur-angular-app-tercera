import { DetalleInfracciones } from './detalle-infracciones';

export interface Infracciones {
    fecha: string;
    detalles: DetalleInfracciones;
    velocidad: number;
    patente: string;
}
