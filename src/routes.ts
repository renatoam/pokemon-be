import { Request, Response, Router } from 'express';
import { AuthenticateController } from './controllers/AuthenticateController';

import { GetAllPokemonsController } from './controllers/GetAllPokemonsController';
import { GetTrainerController } from './controllers/GetTrainerController';
import { GetAllTrainersController } from './controllers/GetAllTrainersController';
import { SignUpController } from './controllers/SignUpController';
import { GetPokemonController } from './controllers/GetPokemonController';
import { GetInitialsController } from './controllers/GetInitialsController';

import mysql from 'mysql2'
import { GetSquadController } from './controllers/GetSquadController';
import { UpdatePokemonController } from './controllers/UpdatePokemonController';

// export const connection = mysql.createConnection(process.env.DATABASE_URL!)
// export const connection = mysql.createConnection({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   ssl: {
//     rejectUnauthorized: true
//   }
// })

// connection.connect()

const router = Router();

// router.get('/', (request: Request, response: Response) => {
//   connection.query('SELECT * FROM pokemon', function (err, rows, fields) {
//     if (err) throw err

//     console.log({ err, rows });

//     return response.status(200).json({rows})
//   })
// })

router.post('/authenticate', new AuthenticateController().handle)
router.post('/signup', new SignUpController().handle)
router.post('/signin', new SignUpController().handle)

router.get('/pokemons', new GetAllPokemonsController().handle);
router.get('/pokemon/:id', new GetPokemonController().handle)
router.get('/trainers', new GetAllTrainersController().handle);
router.get('/trainer/:id', new GetTrainerController().handle);
router.get('/initials', new GetInitialsController().handle);
router.get('/squad/:id', new GetSquadController().handle);

router.put('/pokemon/:id', new UpdatePokemonController().handle);

export default router;
