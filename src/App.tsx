import React from "react";
import "./App.css";
import Landingpage from "./components/landing-page/Landingpage";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import MyPages from "./components/my-pages/MyPages";
import Form from "./components/my-pages/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="FönsterPuts" element={<Landingpage />}></Route>
        <Route path="StädaFint" element={<Landingpage />}></Route>
        <Route path="Mina Sidor" element={<MyPages />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
