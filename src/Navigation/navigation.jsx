import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import APropos from "../pages/APropos/aPropos";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FicheLogement from "../pages/FicheLogement/ficheLogement";
const Navigation = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aPropos" element={<APropos />} />
        <Route path="/ficheLogement/:id" element={<FicheLogement />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Navigation;
