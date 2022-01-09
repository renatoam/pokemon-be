import { Router } from 'express';
import { AuthenticateController } from './controllers/AuthenticateController';

import { GetAllPokemonsController } from './controllers/GetAllPokemonsController';
import { GetTrainerController } from './controllers/GetTrainerController';
import { GetTrainersController } from './controllers/GetTrainersController';
import { SignUpController } from './controllers/SignUpController';

const router = Router();

router.post('/authenticate', new AuthenticateController().handle)
router.post('/signup', new SignUpController().handle)
router.post('/signin', new SignUpController().handle)

router.get('/pokemons', new GetAllPokemonsController().handle);
router.get('/trainers', new GetTrainersController().handle);
router.get('/trainer/:id', new GetTrainerController().handle)

export default router;
