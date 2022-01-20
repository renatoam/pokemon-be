import { Router } from 'express'
import { GetTrainerController } from '../controllers/GetTrainerController'

const trainerRouter = Router()

trainerRouter.get('/:id', new GetTrainerController().handle)

export { trainerRouter }
