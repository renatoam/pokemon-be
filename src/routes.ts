import { Request, Response, Router } from 'express';

import { GetAllPokemonsController } from './controllers/GetAllPokemonsController';
import { mysqlConnection } from './mysql';

const router = Router();

// router.get('/pokemons', new GetAllPokemonsController().handle);
router.get('/users', (request: Request, response: Response) => {
  mysqlConnection.query('SELECT * FROM users', (err: any, rows: any, fields: any) => {
    if (err) throw err

    response.status(200).send(rows)
  })
})

export default router;
