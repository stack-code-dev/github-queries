import { useNavigate,  } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useEffect } from "react"

export default function PrivateRoutes({ children }) {
  const { logged } = useAuth()
  const navigate = useNavigate();
  
  useEffect(() => {
    if(logged) {
      navigate('/my-repositories', { replace: true })
    } else {
      navigate('/login', { replace: true })
    }
    
  },[logged, navigate])

  return children
}