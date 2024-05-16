import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export default function AuthProvider({ children }){
  const [logged, setLogged] = useState(() => {
    const loggedSession = JSON.parse(sessionStorage.getItem('@github-queries:logged')) ?? false

    return loggedSession
  })

  const signIn = (email, password) => {
    if(email === 'user@gmail.com' && password === '123') {
      sessionStorage.setItem('@github-queries:logged', true);
      setLogged(true);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        logged,
        setLogged,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  const { logged, setLogged, signIn } = context
  return { logged, setLogged, signIn }
}