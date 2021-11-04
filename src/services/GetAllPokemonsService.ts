import prismaClient from '../prisma';

class GetAllPokemonsService {
  async execute(limit: number) {
    const pokemons = await prismaClient.kanto.findMany({
      take: limit,
    });

    return pokemons;
  }
}

export { GetAllPokemonsService };
