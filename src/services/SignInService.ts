import { GetTrainerRepository } from "../repositories/GetTrainerRepository"

const getTrainerRepository = new GetTrainerRepository()

export class SignInService {
  async execute(email: string) {
    if (!email) return new Error('Email não informado!')
    if (!email.includes('@')) return new Error('Email inválido!')
    // criar mais um if pra verificar .com (3 casas) ou .br/io/etc (2 casas)

    return await getTrainerRepository.findByEmail(email)
  }
}