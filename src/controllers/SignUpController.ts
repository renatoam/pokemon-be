import { Request, Response } from "express";
import { AuthenticateService } from "../services/AuthenticateService";
import { TrainerType } from "../types";
import bcrypt from 'bcrypt'
import { SignUpService } from "../services/SignUpService";
import { v4 as uuid } from "uuid";
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { createHmac } from 'crypto';


const authenticateService = new AuthenticateService()
const signUpService = new SignUpService()

const minimumPasswordLength = 8
const randomSaltRound = Math.floor(Math.random() * 15)
const generateHashPassword = async (plainPassword: string) => {
  return await bcrypt.hash(plainPassword, randomSaltRound)
}

type SignUpType = Omit<TrainerType, 'id'> & {
  confirmPassword: string
}

export class SignUpController {
  async handle(request: Request, response: Response) {
    const { name, email, password, confirmPassword, avatar, favoriteId } = request.body as SignUpType

    const checkIfEmailAlreadyExists = await authenticateService.execute(email)

    if (checkIfEmailAlreadyExists)
      return response.status(401).json({ message: 'Treinador já existe no sistema' })

    if (!password || password.length < minimumPasswordLength)
      return response.status(401).json({ message: 'Por favor, informar uma senha válida!' })

    if (password !== confirmPassword)
      return response.status(401).json({ message: 'Senhas informadas não batem!' })

    const hashedPassword = await generateHashPassword(password)

    const createdTrainer = await signUpService.execute({
      id: uuid(),
      name,
      email,
      password: hashedPassword,
      avatar,
      favoriteId
    })

    const { password: trainerPass, ...trainerData } = createdTrainer
    const hmacPrivateKey = createHmac('md5', process.env.JWT_SECRET!).digest('base64')
    const token = jwt.sign({ name }, hmacPrivateKey, { expiresIn: 3600 })

    response.setHeader('Set-Cookie', cookie.serialize('auth', token, {
      httpOnly: true,
      maxAge: 3600,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      path: '/'
    }))

    return response.status(201).json({
      message: 'Treinador criado com sucesso!',
      trainer: trainerData
    })
  }
}