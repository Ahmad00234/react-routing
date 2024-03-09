import React from "react";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
