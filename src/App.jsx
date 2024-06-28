import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart";
import { ProductDetail } from "./components/ProductDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShoppingCart/>} />
        <Route path="/product/:productId" element={<ProductDetail/>} />
      </Routes>
    </Router>
  );
};

export default App; // Ensure the default export
