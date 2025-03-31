import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const signin = (newUser, callback) => {
    setUser(newUser)
    callback()
  }

  const signout = (callback) => {
    setUser(null)
    callback()
  }

  const value = {
    user,
    signin,
    signout,
  }

  return <AuthContext value={value}>{children}</AuthContext>
}
