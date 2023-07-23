const Login = ({setUser}) => {
  return (
    <section className="w-full h-screen bg-gray-200 flex justify-center items-center p-10">
    <article className="w-full md:max-w-[600px] flex flex-col justify-center items-center gap-20">
      <article className="text-center ">
        <h2 className="text-4xl text-indigo-600 font-extrabold">Inicia Sesión</h2>
        <p className="text-md font-medium text-gray-600">Inicia sesion completando los siguientes campos con tu nombre de usuario y contraseña.</p>
      </article>
      
      <form className="flex flex-col justify-center items-center gap-10">
        <label className="text-md text-gray-600 font-bold"> Username*
          <input 
            placeholder="user"
            className="bg-gray-100 placeholder-gray-500 accent-indigo-600 outline-0 border border-indigo-600 text-md font-bold text-indigo-800 font-bold w-full px-5 py-2 rounded-2xl"
          />
        </label>
        
        <label className="text-md text-gray-600 font-bold"> Password*
          <input 
            placeholder="123"
            className="bg-gray-100 placeholder-gray-500 accent-indigo-600 outline-0 border border-indigo-600 text-md font-bold text-indigo-800 font-bold w-full px-5 py-2 rounded-2xl"
          />
        </label>
        
        <button>Aceptar</button>
      </form>
    </article>
    </section>
  )
}

export default Login;