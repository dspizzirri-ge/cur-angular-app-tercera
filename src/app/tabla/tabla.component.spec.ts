import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TablaComponent } from './tabla.component';
import { FormsModule } from '@angular/forms';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaComponent ],
      imports: [FormsModule]
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
    
    component.limite = 100;
    fixture.detectChanges();
    const filasTextDanger:number = fixture.debugElement.queryAll(By.css(".text-danger")).length;
    const filasTextDangerComponent:number = component.datos.filter( fila => fila.velocidad >= 100 ).length;
    expect(filasTextDanger).toBe(filasTextDangerComponent);
  });

  it("Las filas con velocidad mayor a 80 y menor a 100 deben tener las clase 'text-warning'", ()=>{
    
    component.limite = 100;
    fixture.detectChanges();
    const filasTextWarning:number = fixture.debugElement.queryAll(By.css(".text-warning")).length;
    const filasTextWarningComponent:number = component.datos.filter( fila => fila.velocidad < 100 && fila.velocidad > 85 ).length;
    expect(filasTextWarning).toBe(filasTextWarningComponent);
  });
});
