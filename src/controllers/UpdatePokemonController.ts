import { Request, Response } from "express";
import { UpdatePokemonService } from "../services/UpdatePokemonService";

const updatePokemonService = new UpdatePokemonService()

export class UpdatePokemonController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { data } = request.body
    const pokemonId = Number(id)

    const updatedPokemon = await updatePokemonService.execute(pokemonId, data)

    return response.status(200).json(updatedPokemon)
  }
}