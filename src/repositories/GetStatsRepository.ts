import prisma from "../prisma";

export class GetStatsRepository {
  async findById(pokemonId: number) {
    return await prisma.$queryRaw`SELECT stat_id, identifier, base_stat FROM stats INNER JOIN pokemon_stats ON id = stat_id WHERE pokemon_id=${pokemonId}`
  }
}