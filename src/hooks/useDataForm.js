import { useState } from "react";

const useDataForm = () => {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})
    
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
    }
    
    return {handleChange, formData, error, setError}
  }
  
export default useDataForm