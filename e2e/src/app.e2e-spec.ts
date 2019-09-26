import { AppPage } from './app.po';
import { browser, logging, ElementFinder, ElementArrayFinder } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Deberia mostrar el detalle de la fila 1 al hacer click sobre ella', () => {
    page.navigateTo();

    const limite: ElementFinder = page.getInputModel("limite");
    limite.sendKeys("100");

    const tabla: ElementArrayFinder = page.getTabla();
    tabla.get(1).click();

    expect(page.getById("detalle-fecha").getText()).toEqual("Fecha: 2019-08-10");
    expect(page.getById("detalle-velocidad").getText()).toEqual("Velocidad: 150");
    expect(page.getById("detalle-modelo").getText()).toEqual("Modelo: CHEVROLET ONIX");
    expect(page.getById("detalle-patente").getText()).toEqual("Patente: MA 456 AD");
    expect(page.getById("detalle-calle").getText()).toEqual("Calle: RIOBAMBA 2123");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
