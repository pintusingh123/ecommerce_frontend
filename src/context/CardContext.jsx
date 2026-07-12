import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const CardContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // for cart
  const BASEURL =
    import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";
  const [total, setTotal] = useState(0);

  //  fetching Cart from backend
  const fetchCart = async () => {
    try {
      const res = await fetch(`${BASEURL}/api/cart/`);
      if (!res.ok) {
        throw new Error("failed to fetch cart")
      }
      const data = await res.json();
      setCartItems(data.item || [] ) 
      setTotal(data.total || 0)



    } catch (error) {
      console.log("error Fecting cart", error);
    }
  };

  useEffect(()=>{
    fetchCart()
  },[])

  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);

    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  return (
    <CardContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCart = () => useContext(CardContext);
