import { PokemonModel } from "../models/PokemonModel";
import prisma from "../prisma";

export class GetPokemonRepository {
  async findbyId(id: number): Promise<PokemonModel | null> {
    const test = await prisma.pokemon_stats.findMany()

    console.log({ test })

    return await prisma.pokemon.findUnique({
      where: {
        id
      }
    })
  }
}