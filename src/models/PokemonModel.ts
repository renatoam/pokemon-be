import { StatsType } from "../types";

export interface PokemonModel {
  order: number,
  base_experience: number,
  weight: number,
  height: number,
  species_id: number | null,
  identifier: string,
  id: number,
  stats: StatsType,
  moves: number[]
}