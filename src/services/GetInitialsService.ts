import prisma from "../prisma";

export class GetInitialsService {
  async execute() {
    return await prisma.pokemon.findMany({
      where: {
        id: { in: [1, 4, 7] }
      }
    })
  }
}