import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import Gamer from "./pages/Gamer";
import Computacion from "./pages/Computacion";
import Accesorios from "./pages/Accesorios";
import PerySer from "./pages/PerySer";
import Carritop from "./pages/Carritop";
import Auths from "./pages/Auths";
import "./assets/style/global.css";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamer" element={<Gamer />} />
        <Route path="/computacion" element={<Computacion />} />
        <Route path="/accesorios" element={<Accesorios />} />
        <Route path="/peryser" element={<PerySer />} />
        <Route path="/carrito" element={<Carritop />} />
        <Route path="/auth" element={<Auths />} />
      </Routes>

      {location.pathname !== "/auth" && location.pathname !== "/carrito" && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
