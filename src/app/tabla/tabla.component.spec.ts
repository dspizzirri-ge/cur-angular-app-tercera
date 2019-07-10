import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TablaComponent } from './tabla.component';
import { DebugElement } from '@angular/core';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaComponent ]
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

  it("La tabla deberia mostrar todas las columnas del array", () => {

    const lineasObjetoDatos = component.datos.length;
    const lineaCabecera = 1;
    const lineasTablaEnHTML = fixture.debugElement.queryAll(By.css("tr")).length;

    expect(lineasObjetoDatos + lineaCabecera).toBe(lineasTablaEnHTML);

  });

  it("Las filas con velocidad mayor o igual a 100 deben tener las clase 'text-danger'", ()=>{
    
    const filasTextDanger:number = fixture.debugElement.queryAll(By.css(".text-danger")).length;
    const filasTextDangerComponent:number = component.datos.filter( fila => fila.velocidad >= 100 ).length;
    expect(filasTextDanger).toBe(filasTextDangerComponent);
  });

  it("Las filas con velocidad mayor a 80 y menor a 100 deben tener las clase 'text-warning'", ()=>{
    
    const filasTextWarning:number = fixture.debugElement.queryAll(By.css(".text-warning")).length;
    const filasTextWarningComponent:number = component.datos.filter( fila => fila.velocidad < 100 && fila.velocidad > 80 ).length;
    expect(filasTextWarning).toBe(filasTextWarningComponent);
  });

  it('Las filas con velocidad menor 80 no se deben mostra en la tabla', ()=>{
    const filasVelocidadMenor80: number = component.datos.filter( fila => fila.velocidad < 80 ).length;
    const filaCabecera:number = 1;
    const filasAMostrar: number = component.datos.length - filasVelocidadMenor80 + filaCabecera;
    const filasTablaHTML:DebugElement[] = fixture.debugElement.queryAll(By.css("tr"));
    const filasTablaHTMLMayor80: number = filasTablaHTML.filter( fila => fila.children.length > 0).length;

    expect(filasAMostrar).toBe(filasTablaHTMLMayor80);
  });
});
