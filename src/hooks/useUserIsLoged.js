import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useUserIsLoged = (user) => {
  const navigate = useNavigate()

  useEffect(() => {
    !user && navigate("/auth")
  }, [user])
}

export default useUserIsLoged
