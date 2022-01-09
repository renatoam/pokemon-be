import { Request, Response } from "express";
import { GetTrainerService } from "../services/GetTrainerService";

const getTrainerService = new GetTrainerService()

export class GetTrainerController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const user = await getTrainerService.execute(id)

    return response.status(200).json(user)
  }
}