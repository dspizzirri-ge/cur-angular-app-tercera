import { MayusculaPipe } from './mayuscula.pipe';

describe('MayusculaPipe', () => {
  it('create an instance', () => {
    const pipe = new MayusculaPipe();
    expect(pipe).toBeTruthy();
  });

  it('Debe pasar fiat a FIAT', () => {

    const pipe = new MayusculaPipe();
    const resultadoPipe = pipe.transform("fiat");

    expect(resultadoPipe).toBe("FIAT");
  })
});
