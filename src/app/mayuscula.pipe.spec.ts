import { MayusculaPipe } from './mayuscula.pipe';

describe('MayusculaPipe', () => {
  it('create an instance', () => {
    const pipe = new MayusculaPipe();
    expect(pipe).toBeTruthy();
  });

  it('Dado el texto "grupoesfera" y ningun parametro extra, debe devolver GRUPOESFERA', () => {
    const pipe = new MayusculaPipe();
    expect(pipe.transform('grupoesfera')).toBe('GRUPOESFERA');
  });

  it('Dado el texto "grupoesfera" y un 5 como parametro extra, debe devolver GRUPOesfera', () => {
    const pipe = new MayusculaPipe();
    expect(pipe.transform('grupoesfera', 5)).toBe('GRUPOesfera');
  });

  it('Dado el texto "grupoesfera" y un "5" como parametro extra, debe devolver grupoesfera', () => {
    const pipe = new MayusculaPipe();
    expect(pipe.transform('GRUPOESFERA', "5")).toBe('GRUPOESFERA');
  });
});
