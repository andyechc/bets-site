import { useNavigate }  from "react-router-dom";
import FormAuth from "../components/FormAuth";
import useDataForm from "../hooks/useDataForm";

import profile from "../assets/profile.png";

const Signin = ({ setUser }) => {
  const {handleChange, error, setError, formData} = useDataForm()
  const navigate = useNavigate()
    
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.username && formData.password) {
      setUser({...formData, img: `${profile}`})
      navigate(-1);
    }
    else{
      setError((prev) => (
        {
          username: "Complete correctamente los campos antes de continuar",
          password: "Complete correctamente los campos antes de continuar"
        }
      ))
    }
  }
  
  return (
    <section className="w-full h-screen bg-gray-200 flex justify-center items-center p-10">
      <article className="w-full md:max-w-[500px] flex flex-col justify-center items-center gap-20">
        <article className="text-center">
          <h2 className="text-4xl text-indigo-600 font-extrabold underline">Regístrate</h2>
          <p className="text-md font-normal text-gray-600 mt-2">Completa los siguientes campos con tu nombre de usuario y contraseña, para crearte tu Cuenta</p>
        </article>
        
        <FormAuth handleSubmit={handleSubmit} handleChange={handleChange} error={error} />
      </article>
    </section>
  )
}

export default Signin;