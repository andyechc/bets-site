import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";

function App() {
  const [user, setUser] = useState(null);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/auth" element={<Auth user={setUser} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
