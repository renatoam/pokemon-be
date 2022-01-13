import prisma from "../prisma";

export class GetSquadService {
  async execute(id: number) {
    return await prisma.squad.findUnique({
      where: {
        id
      }
    })
  }
}