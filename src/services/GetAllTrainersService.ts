import prisma from "../prisma";

class GetAllTrainersService {
  async execute(take: number, skip: number) {
    return await prisma.trainer.findMany({
      take,
      skip
    })
  }
}

export { GetAllTrainersService }