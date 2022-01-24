import { PokemonModel } from "../models/PokemonModel";
import { GetPokemonRepository } from "../repositories/GetPokemonRepository";

const getPokemonRepository = new GetPokemonRepository()

export class GetPokemonService {
  async execute(id: number): Promise<PokemonModel | null> {
    const pokemonResults = JSON.stringify(await getPokemonRepository.findbyId(id))
    const pokemon = JSON.parse(pokemonResults)

    if (!pokemon.id) return null

    return pokemon
  }
}