const uppercase = require('../src/exercise-07');

describe('Testa a função uppercase', () => {
  it('Testa se ao passar "Palavra" a função retorna "PALAVRA"', (done) => {
    uppercase('Palavra', (result) => {
      try {
        expect(result).toBe('PALAVRA');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});