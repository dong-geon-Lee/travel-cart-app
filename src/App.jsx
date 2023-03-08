import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import Reservations from "./pages/Reservations/Reservations";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="main" element={<Main />} />
        <Route path="reservations" element={<Reservations />} />
      </Routes>
    </Router>
  );
};

export default App;
