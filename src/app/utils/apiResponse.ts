import { Response } from 'express'

import type { ApiSuccessResponse } from '../types/index.js'

const success = (res: Response, data: any, message: string, statusCode: number = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
    message,
  })
}

export const ApiResponse = {
  success,
}
