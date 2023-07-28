import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import { AiFillEdit, AiFillCamera } from "react-icons/ai";
import useDataForm from '../hooks/useDataForm'
import ErrorMessage from '../components/ErrorMessage'

const Profile = ({ user, setUser }) => {
  const [showEditName, setShowEditName] = useState(false)
  const {handleChange, error, setError, formData} = useDataForm()
  const navigate = useNavigate()
  const fileInputRef = useRef()
  
  const handleChangeImg = () => {
    fileInputRef.current.click()
  }
  
  const handleEditName = () => {
    if (formData.username === ""){
      setError({...error, username:"No puede dejar el nombre de usuario vacio."})
    }
    else {
      setUser({...user, username: formData.username})
      setShowEditName(!showEditName)
    }
  }
  
  const handleCLoseProfile = () => {
    navigate(-1)
  }
  
  return (
    <section className="w-screen h-screen bg-gray-100 flex justify-center items-center px-10 py-20">
      <article className="w-full h-full md:max-w-[1000px] shadow-lg bg-white rounded-xl flex justify-center items-center gap-10 flex-col p-10">
         <div className="relative flex justify-center items-center">
          <img className="rounded-full object-cover aspect-square w-[150px]" src={user.img} />
          
          <div onClick={handleChangeImg}>
            <AiFillCamera className="text-gray-400 text-3xl absolute bottom-0 right-0 cursor-pointer"/>
          </div>
          
          <input type="file" ref={fileInputRef} className="hidden"/>
         </div>
         
         <div className="flex-col flex gap-10 justify-center items-center">
          <label className="text-2xl font-extrabold text-indigo-600 text-center flex justify-center items-center flex-wrap gap-2">
            {
              showEditName
              ? 
              <>
                <input 
                  name="username"
                  onChange={handleChange}
                  className={`w-full border-b text-center border-indigo-600 ${error.username && "border-red-500"} outline-0 transition-all`}
                  placeholder={user.username}
                />
                <button className="w-full text-xl text-center hover:text-2xl transition-all" onClick={handleEditName}>✅</button> 
                {error && <ErrorMessage error={error.username} className="flex-grow"/>}
              </>
              : 
              <>
                {user.username} 
                <button onClick={handleEditName}><AiFillEdit className="text-lg text-gray-400"/></button>
              </>
            }
          </label>
          
          <button onClick={handleCLoseProfile} className="bg-indigo-600 hover:bg-indigo-900 transition-colors text-white font-bold text-lg px-5 py-1 rounded-lg">Aceptar</button>
         </div>
      </article>
    </section>
  )
}

export default Profile;