import { PokemonModel } from "../models/PokemonModel";
import { GetPokemonRepository } from "../repositories/GetPokemonRepository";
import { GetStatsRepository } from "../repositories/GetStatsRepository";

const getPokemonRepository = new GetPokemonRepository()
const getStatsRepository = new GetStatsRepository()

export class GetPokemonService {
  async execute(id: number): Promise<PokemonModel | null> {
    const pokemon = await getPokemonRepository.findbyId(id)    
    const stats = await getStatsRepository.findById(id)

    if (!pokemon || !stats) return null

    return {
      ...pokemon,
      stats
    }
  }
}