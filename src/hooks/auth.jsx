import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export default function AuthProvider({ children }){
  const [ user, setUser ] = useState(() => {
    const userSession = JSON.parse(sessionStorage.getItem('@github-queries:user')) ?? {}
    
    return userSession
  })
  const [logged, setLogged] = useState(() => {
    const loggedSession = JSON.parse(sessionStorage.getItem('@github-queries:logged')) ?? false

    return loggedSession
  })

  const signIn = (userImg, userName, githubName) => {
    if(userImg && userName && githubName) {
      sessionStorage.setItem('@github-queries:logged', true);
      setLogged(true);

      sessionStorage.setItem('@github-queries:user', JSON.stringify({
        userImg: userImg,
        userName: userName,
        githubName: githubName
      }));
      setUser({
        userImg: userImg,
        userName: userName,
        githubName: githubName
      })
    }
  }

  const signOut = () => {
    setLogged(false)
    sessionStorage.removeItem('@github-queries:logged')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logged,
        setLogged,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  const { user, setUser, logged, setLogged, signIn, signOut } = context
  return { user, setUser, logged, setLogged, signIn, signOut }
}