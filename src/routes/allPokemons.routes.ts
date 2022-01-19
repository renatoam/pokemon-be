import { GetAllPokemonsController } from '../controllers/GetAllPokemonsController';
import { Router } from 'express';

const allPokemonsRouter = Router()

allPokemonsRouter.get('/', new GetAllPokemonsController().handle)

export { allPokemonsRouter }