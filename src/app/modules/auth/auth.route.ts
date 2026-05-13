import express, { Router } from 'express'

import { AuthController } from './auth.controller.js'

const router: Router = express.Router()

router.post('/register', AuthController.register)

router.post('/login', AuthController.login)

export const AuthRoutes = router
