import prisma from "../prisma";

export class GetPokemonService {
  async execute(id: number) {
    return await prisma.pokemon.findUnique({
      where: {
        id
      }
    })
  }
}