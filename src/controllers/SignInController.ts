import { Request, Response } from "express";
import { SignInService } from "../services/SignInService";
import bcrypt from 'bcrypt'
import cookie from 'cookie'
import jwt from 'jsonwebtoken'
import { createHmac } from "crypto";

const signInService = new SignInService()

type SignInType = {
  email: string
  password: string
}

export class SignInController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body as SignInType
    const isAuthenticated = await signInService.execute(email)
    
    if (isAuthenticated instanceof Error)
      return response.status(401).json(isAuthenticated)
    
    response.status(200).json({ message: 'Usuário autenticado!' })

    // const isValidPassword = await bcrypt.compare(password, trainer.password)

    // if (!isValidPassword)
    //   return response.status(401).json({ message: 'Senha informada não confere!' })

    // const { password: trainerPass, ...trainerData } = trainer
    // const hmacPrivateKey = createHmac('md5', process.env.JWT_SECRET!).digest('base64')
    // const token = jwt.sign({ email }, hmacPrivateKey, { expiresIn: 3600 })

    // response.setHeader('Set-Cookie', cookie.serialize('auth', token, {
    //   httpOnly: true,
    //   maxAge: 3600,
    //   secure: process.env.NODE_ENV !== 'development',
    //   sameSite: 'strict',
    //   path: '/'
    // }))

    // return response.status(200).json({ message: 'Login realizado com sucesso!', trainerData })
  }
}