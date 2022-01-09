import prisma from "../prisma";
import { TrainerType } from "../types";

export class SignUpService {
  async execute(trainer: TrainerType) {
    const { id, name, email, password, avatar, favoriteId } = trainer

    return await prisma.trainer.create({
      data: {
        id,
        name,
        email,
        password,
        avatar,
        favorite_id: favoriteId
      }
    })
  }
}