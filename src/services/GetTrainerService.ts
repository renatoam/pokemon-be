import prisma from "../prisma";
import { GetTrainerRepository } from "../repositories/GetTrainerRepository";

const getTrainerRepository = new GetTrainerRepository()
export class GetTrainerService {
  async execute(id: string) {
    if (!id) return new Error('ID inválido ou não informado!')

    return await getTrainerRepository.findById(id)
  }
}
