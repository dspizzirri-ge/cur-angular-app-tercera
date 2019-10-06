import { Infraccion } from './infraccion';

describe('Infraccion', () => {
  it('should create an instance', () => {
    const infraccion = new Infraccion( "2019-05-05", null, 200, "AA 456 GG" )
    expect(infraccion).toBeTruthy();
  });
});
