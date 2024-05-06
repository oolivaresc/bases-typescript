import { getPokemonById } from "../../src/js-foundation/06-promises";

describe('js-foundation/06-promises', () => {
    test('getPokemonById should return an pokemon', async() => {
        const pokemonId = 1;
        const pokemon = await getPokemonById(pokemonId);
        expect(pokemon.name).toBe('bulbasaur');
    });

    test('should return an error if pomemon does not exist', async() => {
        const pokemonId = -1;
        try{
            const pokemon = await getPokemonById(pokemonId);
            expect(true).toBeFalsy();
        }catch(error){
            expect(error).toBe(`Pokemon not found with id: ${pokemonId}`);
        }
    })
});
