import { GetPokemonRepository } from "../repositories/GetPokemonRepository";

const getPokemonRepository = new GetPokemonRepository()

export class GetPokemonService {
  async execute(id: number) {
    if (!id) return new Error('ID obrigatório!')

    const pokemon = await getPokemonRepository.findbyId(id)

    if (!pokemon) return new Error('ID inválido!')

    return pokemon
  }
}