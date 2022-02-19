const searchEmployee = require('./searchEmployee');

describe('Testa a função searchEmployee', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Testa se a função retorna um erro caso o id passado não conste no quadro de funcionários', () => {
    expect(() => {
      searchEmployee('72493-3', 'lastName')
    }).toThrow();
  });

  it('Testa se caso o id passado não conste no quadro de funcionários, a função deve retornar o erro "ID não identificada"', () => {
    expect(() => {
      searchEmployee('24234-3', 'firstName')
    }).toThrow(new Error('ID não identificada'));
  });

  it('Testa se a função retorna um erro caso a informação passada não conste no quadro de funcionários', () => {
    expect(() => {
      searchEmployee('5569-4', 'age')
    }).toThrow();
  });

  it('Testa se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível"', () => {
    expect(() => {
      searchEmployee('1256-4', 'fullName')
    }).toThrow(new Error('Informação indisponível'));
  });

  it('Testa se a função retorna "George", quando chamada com searchEmployee("5569-4", "firstName")', () => {
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
  });

  it('Testa se a função retorna "Zuckerberg", quando chamada com searchEmployee("4456-4", "lastName")', () => {
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
  });

  it('Testa se a função retorna ["Ruby", "SQL"], quando chamada com searchEmployee("9852-2-2", "specialities")', () => {
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
  })
});