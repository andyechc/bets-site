import ErrorMessage from '../components/ErrorMessage'

const FormAuth = ({handleSubmit, handleChange, error}) => {
  
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center gap-10">
      <label className="w-full text-md text-gray-600 font-bold"> Username*
        <input
          onChange={handleChange}
          name="username"
          placeholder="Nombre de Usuario"
          className={`bg-gray-100 placeholder-gray-500 accent-indigo-600 outline-0 border-b border-indigo-600 focus:border-b-4 focus:italic ${error.username && "border-red-500"} text-md font-bold text-indigo-800 font-bold w-full px-5 py-2 rounded-xl transition-all`}
        />
        
        { error.username && <ErrorMessage error={error.username} /> }
      </label>
      
      <label className="w-full text-md text-gray-600 font-bold"> Password*
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Contraseña"
          className={`bg-gray-100 placeholder-gray-500 accent-indigo-600 outline-0 border-b border-indigo-600 focus:border-b-4 focus:italic ${error.password && "border-red-500"} text-md font-bold text-indigo-800 font-bold w-full px-5 py-2 rounded-xl transition-all`}
        />
        { error.password && <ErrorMessage error={error.password} /> }
      </label>
      
      <button className="w-full bg-indigo-600 rounded-xl text-white text-md font-bold px-5 py-2 hover:bg-indigo-900 transition-colors">Aceptar</button>
    </form>
  )
}

export default FormAuth;
