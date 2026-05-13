type User = {
  name: string
  email: string
  password: string
}

const users: User[] = []

const register = async (payload: User) => {
  const existingUser = users.find((u) => u.email === payload.email)

  if (existingUser) {
    throw new Error('User already exists')
  }

  users.push(payload)

  return payload
}

const login = async (payload: { email: string; password: string }) => {
  const user = users.find((u) => u.email === payload.email && u.password === payload.password)

  if (!user) {
    throw new Error('Invalid credentials')
  }

  return user
}

export const AuthService = {
  register,
  login,
}
