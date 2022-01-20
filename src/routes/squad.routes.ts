import { Router } from "express";
import { GetSquadController } from "../controllers/GetSquadController";

const squadRouter = Router()

squadRouter.get('/:id', new GetSquadController().handle)

export { squadRouter }
