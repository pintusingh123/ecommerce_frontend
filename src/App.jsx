import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
 
import Register from "./pages/auth/Register";
import Profile from "./pages/auth/Profile";
import EditProfile from "./pages/auth/EditProfile";
import Home from "./pages/Home";
 
import Login_page from "./pages/auth/Login_page";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="token" element={<Login_page />} />
        
        <Route path="/profile" element={<Profile />} />

        <Route path="/profile/edit" element={<EditProfile />} />

        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
