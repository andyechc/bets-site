import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Signin from "./pages/Signin";
import Error404 from "./pages/Error404";

function App() {
  const [user, setUser] = useState(null);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        
        <Route path="/auth" element={<Auth />}/>
        <Route path="/auth/signin" element={<Signin setUser={setUser}/>}/>
        
        <Route path="*" element={<Error404/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
