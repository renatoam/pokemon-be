import { Router } from "express";
import { GetPokemonController } from "../controllers/GetPokemonController";
import { UpdatePokemonController } from '../controllers/UpdatePokemonController';

const pokemonRouter = Router()

pokemonRouter.get('/:id', new GetPokemonController().handle);
pokemonRouter.put('/:id', new UpdatePokemonController().handle);

export { pokemonRouter }