import { Link, Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <section className="w-full h-screen bg-gray-200 flex justify-center items-center p-10">
      
        <article className="max-w-[600px] bg-gray-100 w-full flex flex-col justify-center items-center gap-16 shadow-xl px-10 py-20 rounded-xl ">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-4xl text-indigo-600 font-extrabold text-center">
              Bienvenido
            </h2>
            <p className="text-md text-gray-600 font-medium text-center ">
              Inicia Sesion con tu cuenta y si no tienes una, Regístrate
            </p>
          </div>
  
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <Link to="login" className="w-full bg-indigo-600 rounded-xl text-center text-2xl text-white font-bold px-5 py-2 hover:bg-indigo-900 transition-colors">
              Iniciar Sesion
            </Link>
  
            <Link className="w-full bg-transparent border border-indigo-600 rounded-xl text-center text-2xl text-indigo-600 font-bold px-5 py-2 hover:bg-indigo-900 hover:text-white transition-colors">
              Regístrate
            </Link>
          </div>
  
          <div className="w-full">
            <p className="text-md font-light text-gray-600 text-center">
              Al continuar acepta nuestros{" "}
              <a className="text-indigo-600">Términos y Condiciones de Uso</a> y
              nuestra <a className="text-indigo-600">Política de Privacidad</a>.
            </p>
          </div>
        </article>
        
      
    </section>
  );
};

export default Auth;
