import prisma from "../prisma";

export class GetTrainerRepository {
  async findById(id: string) {
    return await prisma.trainer.findUnique({
      where: {
        id
      }
    })
  }

  async findByEmail(email: string) {
    return await prisma.trainer.findUnique({
      where: {
        email
      }
    })
  }
}