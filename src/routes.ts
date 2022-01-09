import { Request, Response, Router } from 'express';
import { AuthenticateController } from './controllers/AuthenticateController';

import { GetAllPokemonsController } from './controllers/GetAllPokemonsController';
import { GetTrainerController } from './controllers/GetTrainerController';
import { GetAllTrainersController } from './controllers/GetAllTrainersController';
import { SignUpController } from './controllers/SignUpController';
import { GetPokemonController } from './controllers/GetPokemonController';

const router = Router();

router.get('/', (request: Request, response: Response) => {
  console.log({ request })

  return response.status(200).send(`
    Olá, essa rota ainda não tem conteúdo. Você pode tentar: \n\

    - Pokemon: /pokemon/:id \n\
    - Pokemons: /pokemons \n\
    - Trainer: /trainer/:id \n\
    - Trainers: /trainers
  `)
})

router.post('/authenticate', new AuthenticateController().handle)
router.post('/signup', new SignUpController().handle)
router.post('/signin', new SignUpController().handle)

router.get('/pokemons', new GetAllPokemonsController().handle);
router.get('/pokemon/:id', new GetPokemonController().handle)
router.get('/trainers', new GetAllTrainersController().handle);
router.get('/trainer/:id', new GetTrainerController().handle)

export default router;
