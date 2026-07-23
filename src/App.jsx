import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
 
import Register_page from "./pages/auth/Register_page";
import Profile from "./pages/auth/Profile";
import EditProfile from "./pages/auth/EditProfile";
import Home from "./pages/Home";
 
import Login_page from "./pages/auth/Login_page";

import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/token" element={<Login_page />} />
        
        <Route path="/profile" element={<Profile />} />

        <Route path="/profile/edit" element={<EditProfile />} />

        <Route path="/register" element={<Register_page />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
