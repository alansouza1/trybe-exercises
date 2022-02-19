const decode = require('./decode');

describe('A função decode recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números', () => {
  it('Testa se decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });

  it('Testa se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    const string = '1, 2, 3, 4, 5';
    const result = 'a, e, i, o, u';
    expect(decode(string)).toBe(result);
  });

  it('Testa se os demais números não são convertidos', () => {
    const string = '6-h3 th2r2!';
    const result = '6-hi there!';
    expect(decode(string)).toBe(result);
  });

  it('Testa se a string que é retornada pela função têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    const string = 'H2ll4 W4rld!';
    expect(decode(string)).toHaveLength(12);
  });
});