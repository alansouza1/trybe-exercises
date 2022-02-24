beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// Antes do primeiro teste o beforeEach vai imprimir no console '1 - beforeEach'
// O teste irá então imprimir '1 - test' no console
// E por fim o afterEach vai imprimir '1 - afterEach'

// O beforeEach no escopo global vai imprimir '1 - beforeEach'
// O beforeEach dentro do escopo do describe vai imprimir '2 - beforeEach'
// Depois o teste do describe vai ser rodado e imprimir '2 - test'
// O afterEach do escopo do describe vai imprimir '2 - afterEach' no console
// Por último, o afterEach no escopo global irá imprimir '1 - afterEach'