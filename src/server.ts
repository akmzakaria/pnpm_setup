import app from './app.js'
import { env } from './app/config/env.js'

let server: any

process.on('uncaughtException', (error) => {
  console.log('Uncaught Exception Detected')
  console.log(error)

  process.exit(1)
})

async function bootstrap() {
  server = app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`)
  })
}

;(async () => {
  await bootstrap()
})()

process.on('unhandledRejection', (error) => {
  console.log('Unhandled Rejection Detected')
  console.log(error)

  if (server) {
    server.close(() => {
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
})

process.on('SIGTERM', (error) => {
  console.log('Server is shutting down!')

  if (server) {
    server.close(() => {
      process.exit(0)
    })
  } else {
    process.exit(0)
  }
})
