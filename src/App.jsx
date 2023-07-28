import { useState } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Signin from "./pages/Signin"
import Login from "./pages/Login"
import Error404 from "./pages/Error404"
import Profile from "./pages/Profile"

const initialUserState = { username: "user", password: "12345678", img:"/src/assets/profile.png" }

function App() {
  const [user, setUser] = useState(initialUserState)

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home user={user} />}
          lazy={() => import("./pages/Home")}
        />
        
        <Route 
          path="/profile" 
          element={<Profile user={user} setUser={setUser}/>} 
          lazy={() => import("./pages/Profile")}
        />

        <Route
          path="/auth"
          element={<Auth />}
          lazy={() => import("./pages/Auth")}
        />
        <Route
          path="/auth/signin"
          element={<Signin setUser={setUser}/>}
          lazy={() => import("./pages/Signin")}
        />
        <Route
          path="/auth/login"
          element={<Login user={user} />}
          lazy={() => import("./pages/Login")}
        />

        <Route path="*" element={<Error404 />} lazy={()=>import("./pages/Error404")}  />
      </Routes>
    </HashRouter>
  );
}

export default App;
