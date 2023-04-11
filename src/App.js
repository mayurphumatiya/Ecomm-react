import React from 'react'
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductInfo from "./pages/ProductInfo";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productInfo" element={<ProductInfo />} />
      </Routes>
    </>
  );
}

export default App;
