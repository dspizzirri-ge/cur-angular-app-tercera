import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaComponent } from './tabla.component';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MayusculaPipe } from '../pipes/mayuscula.pipe';
import { InfraccionesService } from '../servicios/infracciones.service';
import { Observable, of } from 'rxjs';

class InfraccionesServiceStub{

  getInfracciones():Observable<any>{
    return of([
      { "fecha": "2019-02-09", "detalles":{ "modelo": "Renault Kwid", "calle": "Riobamba 2123" }, "velocidad": 80 , "patente": "NA 456 AF" },
      { "fecha": "2019-03-16", "detalles":{ "modelo": "Volkswagen Amarok", "calle": "Riobamba 2123" }, "velocidad": 70 , "patente": "AA 456 AG" },
      { "fecha": "2019-05-17", "detalles":{ "modelo": "Peugeot 208", "calle": "Riobamba 2123" }, "velocidad": 90 , "patente": "AY 458 AA" },
      { "fecha": "2019-06-02", "detalles":{ "modelo": "Fiat Cronos", "calle": "Riobamba 2123" }, "velocidad": 110 , "patente": "HA 458 YT" },
    ])
  }
}

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaComponent, MayusculaPipe ],
      imports: [ FormsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ { provide: InfraccionesService, useClass: InfraccionesServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("La tabla deberia mostrar todas las filas del array si el limite es 0", () => {

    const lineasObjetoDatos = component.datos.length;
    const lineaCabecera = 1;
    const lineasTablaEnHTML = fixture.debugElement.queryAll(By.css("tr")).length;
    
    expect(lineasObjetoDatos + lineaCabecera).toBe(lineasTablaEnHTML);

  });

  it("La tabla no deberia mostrar las filas con velocidad menor a 85 si el limite es 100", () => {

    const HTMLInputLimite = fixture.debugElement.query(By.css("input[name=limite]")).nativeElement;
    
    HTMLInputLimite.value = 100
    HTMLInputLimite.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const filaCabecera:number = 1;
    const filasAMostrar:number = component.datos.filter( fila => fila.velocidad >= 85 ).length + filaCabecera;
    
    const filasTablaHTML:DebugElement[] = fixture.debugElement.queryAll(By.css("tr"));
    const filasTablaHTMLAMostrar:number = filasTablaHTML.filter( fila => fila.children.length > 0).length;

    expect(filasAMostrar).toBe(filasTablaHTMLAMostrar); 
  });

  it("La tabla deberia mostrar las filas con velocidad mayor o igual a 100 con la clase text-danger si el limite es 100", () => {

    const HTMLInputLimite = fixture.debugElement.query(By.css("input[name=limite]")).nativeElement;
    
    HTMLInputLimite.value = 100
    HTMLInputLimite.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const filasAMostrar:number = component.datos.filter( fila => fila.velocidad >= 100 ).length;
    
    const filasTablaHTML:DebugElement[] = fixture.debugElement.queryAll(By.css(".text-danger"));
    const filasTablaHTMLAMostrar:number = filasTablaHTML.filter( fila => fila.children.length > 0).length;

    expect(filasAMostrar).toBe(filasTablaHTMLAMostrar); 
  });
});
