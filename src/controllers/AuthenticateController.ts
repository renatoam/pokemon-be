import { Request, Response } from "express";
import { AuthenticateService } from "../services/AuthenticateService";

const authenticateService = new AuthenticateService()

export class AuthenticateController {
  async handle(request: Request, response: Response) {
    const { email } = request.body

    const user = await authenticateService.execute(email)

    if (!user) return response.status(401).json({ message: 'Usuário não encontrado no sistema!' })

    return response.status(200).send('OK!')
  }
}