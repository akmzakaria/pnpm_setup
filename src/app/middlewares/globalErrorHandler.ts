import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = error.statusCode || 500

  const errorResponse: any = {
    success: false,
    message: error.message || 'Something went wrong',
    statusCode,
  }

  if (process.env.NODE_ENV === 'development') {
    errorResponse.stack = error.stack
    errorResponse.error = error
  }

  res.status(statusCode).json(errorResponse)
}

export default globalErrorHandler
