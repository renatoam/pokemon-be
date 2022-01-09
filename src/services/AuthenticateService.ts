import prisma from "../prisma";

export class AuthenticateService {
  async execute(email: string) {
    return await prisma.trainer.findUnique({
      where: {
        email
      }
    })
  }
}