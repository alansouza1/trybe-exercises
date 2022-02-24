// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("../src/exercise-08");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expected = new Error('Não temos esse pokémon para você :(');

    const callback = (error, result) => {
      expect(error).toEqual(expected);
      expect(result).toBeNull();
      done();
    };

    getPokemonDetails((pokemon) => pokemon.name === 'Squirftle', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expected = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';

    const callback = (error, result) => {
      expect(result).toBe(expected);
      expect(error).toBeNull();
      done();
    };

    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback);
  });
});