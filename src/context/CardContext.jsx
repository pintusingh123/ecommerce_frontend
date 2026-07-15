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
        throw new Error("failed to fetch cart");
      }
      const data = await res.json();
      setCartItems(data.items || []);
      setTotal(data.total || 0);
    } catch (error) {
      console.log("error Fecting cart", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (productid) => {
    try {
      await fetch(`${BASEURL}/api/cart/add/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ product_id: productid }),
      });
      fetchCart();
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

  const removeFromCart = async (item_id) => {
    try {
      await fetch(`${BASEURL}/api/cart/remove/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify({item_id:item_id})
      });
      fetchCart();
    } catch (error) {
      console.error("Error removing from cart", error);
    }
  };

  const updateQuantity =async (item_id, quantity) => {
    if(quantity < 1) {
      await removeFromCart(item_id)
      return;
    }
   try{
      await fetch(`${BASEURL}/api/cart/update/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify({item_id:item_id , quantity})
      });
      fetchCart();

   }catch(error){
    console.error("error updating quantity", error)
   }
  };

  return (
    <CardContext.Provider
      value={{ cartItems,total, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCart = () => useContext(CardContext);
