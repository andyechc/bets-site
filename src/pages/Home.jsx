import  Header  from "../components/Header"
import useUserIsLoged from "../hooks/useUserIsLoged"

const Home = ({ user }) => {
  useUserIsLoged(user)

  return (
    <section>
      <Header user={user} />
      <main>
        
      </main>
    </section>
  )
}

export default Home
