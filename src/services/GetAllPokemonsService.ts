import prisma from '../prisma';

class GetAllPokemonsService {
  async execute(limit: number) {
    const pokemons = await prisma.pokemon.findMany({
      take: limit,
    });

    return pokemons;
  }
}

export { GetAllPokemonsService };
