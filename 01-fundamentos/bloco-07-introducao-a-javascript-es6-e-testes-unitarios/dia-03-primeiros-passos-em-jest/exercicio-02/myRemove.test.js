const myRemove = require('./myRemove');

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const array = [1, 2, 3, 4];
    const result = [1, 2, 4];
    expect(myRemove(array, 3)).toEqual(result);
  });

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).not.toEqual(array);
  });
  
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 5)).toEqual(array);
  });
});