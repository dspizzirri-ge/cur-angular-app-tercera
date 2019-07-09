import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaComponent } from './tabla.component';
import { By } from '@angular/platform-browser';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TablaComponent]
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
});
