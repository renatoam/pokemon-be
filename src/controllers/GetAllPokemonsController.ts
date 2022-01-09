import { Request, Response } from 'express';

import { GetAllPokemonsService } from '../services/GetAllPokemonsService';

export class GetAllPokemonsController {
  async handle(request: Request, response: Response) {
    const { limit } = request.query;
    const take = Number(limit) || 10;

    const service = new GetAllPokemonsService();
    const pokemons = await service.execute(take);

    return response.status(200).json(pokemons);
  }
}
