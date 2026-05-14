import { Request, Response } from 'express'

import { AuthService } from './auth.service.js'
import tryCatch from '../../utils/tryCatch.js'

const register = tryCatch(async (req: Request, res: Response) => {
  const result = AuthService.register(req.body)

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: result,
  })
})

const login = tryCatch(async (req: Request, res: Response) => {
  const result = AuthService.login(req.body)

  res.status(200).json({
    success: true,
    message: 'Login successful',
    data: result,
  })
})

export const AuthController = {
  register,
  login,
}
