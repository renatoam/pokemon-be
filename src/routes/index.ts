import { Request, Response, Router } from 'express';
import { AuthenticateController } from '../controllers/AuthenticateController';

import { GetTrainerController } from '../controllers/GetTrainerController';
import { SignUpController } from '../controllers/SignUpController';
import { GetInitialsController } from '../controllers/GetInitialsController';

import mysql from 'mysql2'
import { GetSquadController } from '../controllers/GetSquadController';
import { pokemonRouter } from './pokemon.routes';
import { allPokemonsRouter } from './allPokemons.routes';
import { SignInController } from '../controllers/SignInController';
import { allTrainersRouter } from './allTrainers.routes';

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

router.get('/front', (request: Request, response: Response) => {
  return response.sendFile('index.html', { root: __dirname })
})

// Excluir a Controller de authenticate e criar um repository
// Chamar o repo no service e usar esse service em Sign Up e Sign In
router.post('/authenticate', new AuthenticateController().handle)
router.post('/signup', new SignUpController().handle)
router.post('/signin', new SignInController().handle)

router.use('/pokemon', pokemonRouter)
router.use('/pokemons', allPokemonsRouter)
router.use('/trainers', allTrainersRouter);

router.get('/trainer/:id', new GetTrainerController().handle);
router.get('/initials', new GetInitialsController().handle);
router.get('/squad/:id', new GetSquadController().handle);

export default router;
