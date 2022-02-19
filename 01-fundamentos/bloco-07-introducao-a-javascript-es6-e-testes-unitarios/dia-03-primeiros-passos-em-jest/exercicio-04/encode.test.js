const encode = require('./encode');

describe('A função encode ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números', () => {
  it('Testa se encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });

  it('Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    const string = 'a, e, i, o, u';
    const result = '1, 2, 3, 4, 5';
    expect(encode(string)).toBe(result);
  });

  it('Testa se as demais letras não são convertidas', () => {
    const string = 'hi there!';
    const result = 'h3 th2r2!';
    expect(encode(string)).toBe(result);
  });

  it('Testa se a string que é retornada pela função têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    const string = 'Hello World!';
    expect(encode(string)).toHaveLength(12);
  });
});