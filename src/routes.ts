import { Router } from 'express';

import { GetAllPokemonsController } from './controllers/GetAllPokemonsController';

const router = Router();

router.get('/pokemons', new GetAllPokemonsController().handle);

export default router;
