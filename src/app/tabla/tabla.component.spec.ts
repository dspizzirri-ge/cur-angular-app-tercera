import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaComponent } from './tabla.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaComponent ],
      imports: [ FormsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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

  /*
  it("Las filas con velocidad mayor o igual a 100 deben tener las clase 'text-danger'", ()=>{

    const filasTextDanger:number = fixture.debugElement.queryAll(By.css(".text-danger")).length;
    const filasTextDangerComponent:number = component.datos.filter( fila => fila.velocidad >= 100 ).length;
    expect(filasTextDanger).toBe(filasTextDangerComponent);
  });
  */
  /*
  it("Las filas con velocidad mayor a 80 y menor a 100 deben tener las clase 'text-warning'", ()=>{

    const filasTextWarning:number = fixture.debugElement.queryAll(By.css(".text-warning")).length;
    const filasTextWarningComponent:number = component.datos.filter( fila => fila.velocidad < 100 && fila.velocidad > 80 ).length;
    expect(filasTextWarning).toBe(filasTextWarningComponent);
  });
  */
});
