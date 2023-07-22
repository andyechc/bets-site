import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

const Home = ({user}) => {
  const navigate = useNavigate()
  
  useEffect(() => {
    !user && navigate('/auth')
  }, [user]);
  
  return (
    <h1>Home</h1>
  )
}

export default Home;