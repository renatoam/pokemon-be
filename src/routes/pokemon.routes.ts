import { Router } from "express";
import { GetPokemonController } from "../controllers/GetPokemonController";

const pokemonRouter = Router()

pokemonRouter.get('/:id', new GetPokemonController().handle);

export { pokemonRouter }