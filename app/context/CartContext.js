"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const router = useRouter();
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]); // Clear the cart state
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart"); // Clear cart from localStorage
    }
  };
  // Load cart from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  // Function to save the cart to localStorage
  const saveCartToLocalStorage = (newCart) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const addToCart = (product, selectedVariation, quantity) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item?.id === product?.id &&
          JSON.stringify(item.selectedVariation?.values) ===
            JSON.stringify(selectedVariation?.values)
      );
  
      let updatedCart;
      if (existingItemIndex !== -1) {
        updatedCart = prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedCart = [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            stock: product.stock,
            selectedVariation: selectedVariation,
            quantity: quantity,
            image: product.image,
          },
        ];
      }
  
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  
    toast.success("🛒 Cart Updated!");
  };
  
  const removeFromCart = (productId, selectedVariation) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) =>
          !(
            item.id === productId &&
            JSON.stringify(item.selectedVariation) ===
              JSON.stringify(selectedVariation)
          )
      );

      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  // Sync cart with localStorage whenever the cart changes
  useEffect(() => {
    if (cart.length === 0) {
      localStorage.removeItem("cart");
    } else {
      saveCartToLocalStorage(cart);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
