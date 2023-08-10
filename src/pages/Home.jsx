import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import  Header  from "../components/Header"

const Home = ({ user }) => {
  const navigate = useNavigate()

  useEffect(() => {
    !user && navigate("/auth")
  }, [user])

  return (
    <section>
      <Header user={user} />
      <main>
        
      </main>
    </section>
  )
}

export default Home
