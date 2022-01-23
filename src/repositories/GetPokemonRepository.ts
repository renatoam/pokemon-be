import { PokemonModel } from "../models/PokemonModel";
import prisma from "../prisma";

export class GetPokemonRepository {
  async findbyId(id: number): Promise<PokemonModel | null> {
    return await prisma.pokemon.findUnique({
      where: {
        id
      }
    })
  }
}