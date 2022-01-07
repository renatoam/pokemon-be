import { Request, response, Response, Router } from 'express';

import { GetAllPokemonsController } from './controllers/GetAllPokemonsController';

const router = Router();

// router.get('/pokemons', new GetAllPokemonsController().handle);
router.get('/', () => {

  response.status(200).send('Please, go to /users to test this API =]')
})

router.get('/users', (request: Request, response: Response) => {
  response.status(200).send({ message: 'user data should be here' })
})

export default router;
