import { MayusculaPipe } from './mayuscula.pipe';

describe('MayusculaPipe', () => {
  it('create an instance', () => {
    const pipe = new MayusculaPipe();
    expect(pipe).toBeTruthy();
  });

  it("Debe convertir la cadena esfera a ESFERA", ()=>{
    const pipe = new MayusculaPipe();
    expect(pipe.transform("esfera")).toBe("ESFERA")
  });
});
