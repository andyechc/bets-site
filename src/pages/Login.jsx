import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormAuth from "../components/FormAuth";

const Login = ({ user }) => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState({})
  const navigate = useNavigate()

  // console.log(user, formData)

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (value === "") {
      setFormData((prev) => ({ ...prev, [name]: "" }));
      setError((prev) => ({
        ...prev,
        [name]: "Debe de rellenar el campo: " + name,
      }));
    } else if (name === "username" && value.length > 10) {
      setFormData((prev) => ({ ...prev, [name]: "" }));
      setError((prev) => ({
        ...prev,
        [name]: "Este campo no debe tener mas de 10 caracteres.",
      }));
    } else if (name === "password" && value.length < 8) {
      setFormData((prev) => ({ ...prev, [name]: "" }));
      setError((prev) => ({
        ...prev,
        [name]: "Este campo debe tener no menos 8 caracteres.",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username && formData.password && user) {
      if (
        formData.username === user.username &&
        formData.password === user.password
      ) {
        navigate("/");
      } else {
        setError((prev) => ({
          username: "El Nombre de Usuario o la Contraseña son incorrectos.",
          password: "El Nombre de Usuario o la Contraseña son incorrectos.",
        }));
      }
    } else {
      setError((prev) => ({
        username: "Rellena los Campos",
        password: "Rellena los Campos",
      }));
    }
  };

  return (
    <section className="w-full h-screen bg-gray-200 flex justify-center items-center p-10">
      <article className="w-full md:max-w-[500px] flex flex-col justify-center items-center gap-20">
        <article className="text-center">
          <h2 className="text-4xl text-indigo-600 font-extrabold underline">
            Inicia Sesión
          </h2>
          <p className="text-md font-normal text-gray-600 mt-2">
            Completa los siguientes campos con tu nombre de usuario y contraseña
            para Iniciar Sesión con tu Cuenta
          </p>
        </article>

        <FormAuth
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          error={error}
        />
      </article>
    </section>
  );
};

export default Login;
