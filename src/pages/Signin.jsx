import { useState } from "react";
import { useNavigate }  from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

const Signin = ({ setUser }) => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState({})
  
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    
    if (value === "") {
      setError((prev) => ({...prev, [name]: "Debe de rellenar el campo: " + name}))
    }
    else if (name === "username" && value.length > 10) {
      setError((prev) => ({...prev, [name]: "Este campo no debe tener mas de 10 caracteres."}))
    }
    else if (name === "password" && value.length < 8) {
      setError((prev) => ({...prev, [name]: "Este campo debe tener no menos 8 caracteres."}))
    }
    else {
      setFormData((prev) => ({...prev, [name]:value}))
      setError((prev) => ({...prev, [name]:""}))
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.username && formData.password) {
      setUser(formData);
      navigate("/login");
    }
    else{
      setError((prev) => (
        {
          username: "No puede dejar vacio los campos",
          password: "No puede dejar vacio los campos"
        }
      ))
    }
  }
  
  return (
    <section className="w-full h-screen bg-gray-200 flex justify-center items-center p-10">
      <article className="w-full md:max-w-[500px] flex flex-col justify-center items-center gap-20">
        <article className="text-center ">
          <h2 className="text-4xl text-indigo-600 font-extrabold">Regístrate</h2>
          <p className="text-md font-medium text-gray-600">Completa los siguientes campos con tu nombre de usuario y contraseña.</p>
        </article>
        
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center gap-10">
          <label className="w-full text-md text-gray-600 font-bold"> Username*
            <input
              onChange={handleChange}
              name="username"
              placeholder="Nombre de Usuario"
              className={`bg-gray-100 placeholder-gray-500 accent-indigo-600 outline-0 border-b border-indigo-600 focus:border-b-4 ${error.username && "border-red-500"} text-md font-bold text-indigo-800 font-bold w-full px-5 py-2 rounded-xl transition-all`}
            />
            
            { error.username && <ErrorMessage error={error.username} /> }
          </label>
          
          <label className="w-full text-md text-gray-600 font-bold"> Password*
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Contraseña"
              className={`bg-gray-100 placeholder-gray-500 accent-indigo-600 outline-0 border-b border-indigo-600 focus:border-b-4 ${error.password && "border-red-500"} text-md font-bold text-indigo-800 font-bold w-full px-5 py-2 rounded-xl transition-all`}
            />
            { error.password && <ErrorMessage error={error.password} /> }
          </label>
          
          <button className="w-full bg-indigo-600 rounded-xl text-white text-md font-bold px-5 py-2 hover:bg-indigo-900 transition-colors">Aceptar</button>
        </form>
      </article>
    </section>
  )
}

export default Signin;