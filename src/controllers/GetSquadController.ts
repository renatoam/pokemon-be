import { Request, Response } from "express";
import { GetSquadService } from "../services/GetSquadService";

const getSquadService = new GetSquadService()

export class GetSquadController {
  async handle(request: Request, response: Response) {
    const { id } = request.body
    const squadId = Number(id)

    if (!id) return response.status(400).json({ message: 'Id não encontrado!' })

    const squad = await getSquadService.execute(squadId)

    return response.status(200).json(squad)
  }
}