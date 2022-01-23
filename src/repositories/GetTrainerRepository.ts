import prisma from "../prisma";

// ALTERAR NO BANCO TODOS OS IDS PRA UUID

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