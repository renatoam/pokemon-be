import prisma from "../prisma";

export class UpdatePokemonService {
  // TODO: descobrir o tipo do "data"
  async execute(id: number, data: any) {
    return await prisma.pokemon.update({
      where: {
        id
      },
      data
    })
  }
}