import prisma from "../prisma";

export class GetTrainerService {
  async execute(id: string) {
    return await prisma.trainer.findUnique({
      where: {
        id
      }
    })
  }
}
