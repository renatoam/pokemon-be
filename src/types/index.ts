export type EvolutionType = {
  num: string;
  name: string;
};

export type PokemonType = {
  id: number;
  num: string;
  name: string;
  img: string;
  type: string[];
  height: string;
  weight: string;
  candy: string;
  egg: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers: number[] | null;
  weaknesses: string[];
  prev_evolution?: EvolutionType[];
  next_evolution?: EvolutionType[];
};

export type TrainerType = {
  id: string,
  name: string,
  email: string,
  password: string,
  avatar?: string,
  favoriteId?: number,
}

export type StatType = 'hp' | 'attack' | 'defense' | 'special_attack' | 'special_defense' | 'speed'

export type StatsType = {
  [key in StatType]: string;
};