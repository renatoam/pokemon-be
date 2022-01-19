import { Request, Response } from "express";
import { GetPokemonService } from "../services/GetPokemonService";

const getPokemonService = new GetPokemonService()

export class GetPokemonController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    if (!id) return response.status(400).json({ message: 'Por favor, informe um id!' })

    try {
      const pokemonId = Number(id)
      const pokemon = await getPokemonService.execute(pokemonId)

      return response.status(200).json(pokemon)
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}