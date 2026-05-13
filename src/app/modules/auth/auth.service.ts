import { success } from 'zod'
import { User, LoginPayload } from '../../types/index.js'

const users: User[] = []

const register = async (payload: User) => {
  const existingUser = users.find((u) => u.email === payload.email)

  if (existingUser) {
    throw new Error('User already exists')
  }

  users.push(payload)

  return payload
}

const login = async (payload: LoginPayload) => {
  const user = users.find((u) => u.email === payload.email && u.password === payload.password)

  if (!user) {
    return {
      success: false,
      message: 'Invalid Credentials!',
    }
  }

  return user
}

export const AuthService = {
  register,
  login,
}
