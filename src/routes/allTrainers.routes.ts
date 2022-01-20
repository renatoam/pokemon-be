import { Router } from "express";
import { GetAllTrainersController } from "../controllers/GetAllTrainersController";

const allTrainersRouter = Router()

allTrainersRouter.get('/', new GetAllTrainersController().handle)

export { allTrainersRouter }