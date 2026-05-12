import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
// import { UserRoutes } from './app/modules/user/user.route'

const app: Application = express()

// app.listen(5000)

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.json('Data fetching successful')
})

// app.use('/api/users', UserRoutes)

export default app
