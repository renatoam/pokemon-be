import { Request, Response } from "express";
import { GetInitialsService } from "../services/GetInitialsService";

const getInitialsService = new GetInitialsService()

export class GetInitialsController {
  async handle(request: Request, response: Response) {
    const initials = await getInitialsService.execute()

    return response.status(200).json({ initials })
  }
}