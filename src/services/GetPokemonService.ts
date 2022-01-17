import { PokemonModel } from "../models/PokemonModel";
import prisma from "../prisma";
import { Prisma } from "@prisma/client";

export class GetPokemonService {
  async execute(id: number) {
    return await prisma.pokemon.findUnique({
      where: {
        id
      }
    })
  }
}