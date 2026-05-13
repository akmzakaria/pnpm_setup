import express, { Application, Request, Response, Router } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { AuthRoutes } from './app/modules/auth/auth.route.js'

const app: Application = express()

// const router = Router()

// app.listen(5000)

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Server is running successfully',
  })
})

app.use('/api/v1', AuthRoutes)

export default app
