import { Router } from "express";
import { GetInitialsController } from "../controllers/GetInitialsController";

const initialsRouter = Router()

initialsRouter.get('/', new GetInitialsController().handle)

export { initialsRouter }
