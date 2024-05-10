import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export default function AuthProvider({ children }){
  const [logged, setLogged] = useState(() => {
    const local = localStorage.getItem('@github-queries:user')

    if(local) {
      return local
    } else {
      return false
    }
  })

  const signIn = () => {
    localStorage.setItem('@github-queries:user', true)
    setLogged(true)
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