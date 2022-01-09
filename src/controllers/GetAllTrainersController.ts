import { Request, Response } from "express";
import { GetAllTrainersService } from "../services/GetAllTrainersService";

const getAllTrainersService = new GetAllTrainersService()

// enum RequestMethods {
//   GET = 'GET',
//   POST = 'POST',
//   PUT = 'PUT',
//   DELETE = 'DELETE',
//   PATCH = 'PATCH'
// }

// const handleProhibitedMethod = (receivedMethod: string, allowedMethod: keyof typeof RequestMethods) => {
//   return receivedMethod === allowedMethod
// }

class GetAllTrainersController {
  async handle(request: Request, response: Response) {
    const { limit, offset } = request.query
    const take = limit ? Number(limit) : 10
    const skip = offset ? Number(offset) : 0

    // if (!handleProhibitedMethod(request.method, 'GET'))
    //   return response.status(403).json({ message: 'Method not allowed. Try again using GET.' })

    const trainers = await getAllTrainersService.execute(take, skip)

    return response.status(200).json(trainers)
  }
}

export { GetAllTrainersController }
