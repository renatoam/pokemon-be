import prisma from "../prisma";

export class GetPokemonRepository {
  async findbyId(id: number) {
    return await prisma.pokemon.findUnique({
      where: {
        id
      }
    })
  }
}