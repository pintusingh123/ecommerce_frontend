import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios";
import { useAuth } from "./AuthContext";

const CardContext = createContext();

export const CartProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Fetch cart
  const fetchCart = async () => {
    if (!isAuthenticated) {
      setCartItems([]);
      setTotal(0);
      return;
    }

    try {
      const res = await api.get("/cart/");

      setCartItems(res.data.items || []);
      setTotal(res.data.total || 0);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [isAuthenticated]);

  // Add to cart
  const addToCart = async (productId) => {
    if (!isAuthenticated) {
      alert("Please login first.");
      return;
    }

    try {
      await api.post("/cart/add/", {
        product_id: productId,
      });

      fetchCart();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // Remove from cart
  const removeFromCart = async (itemId) => {
    try {
      await api.post("/cart/remove/", {
        item_id: itemId,
      });

      fetchCart();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // Update quantity
  const updateQuantity = async (itemId, quantity) => {
    if (quantity < 1) {
      await removeFromCart(itemId);
      return;
    }

    try {
      await api.post("/cart/update/", {
        item_id: itemId,
        quantity,
      });

      fetchCart();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  return (
    <CardContext.Provider
      value={{
        cartItems,
        total,
        fetchCart,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCart = () => useContext(CardContext);