"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const router = useRouter();
  // Initialize state from localStorage, or use an empty array if no data exists
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Function to save the cart to localStorage
  const saveCartToLocalStorage = (newCart) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const addToCart = (product, selectedVariation, quantity) => {
    console.log("Product Variations:", product.variation_combinations);
    console.log("Selected Variation:", selectedVariation);

    const selectedVariationDetails = product.variation_combinations.find(
      (variation) => variation.values.includes(selectedVariation.values)
    );

    if (!selectedVariationDetails) {
      console.error("Selected variation is not available");
      return;
    }

    const { price, stock } = selectedVariationDetails;

    const existingItemIndex = cart.findIndex(
      (item) =>
        item.id === product.id && item.selectedVariation === selectedVariation
    );

    let updatedCart;
    if (existingItemIndex !== -1) {
      updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      toast.success("🦄 Item added to cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      updatedCart = [
        ...cart,
        {
          id: product.id,
          name: product.name,
          price: price,
          stock: stock,
          selectedVariation: selectedVariation,
          variationDetails: selectedVariationDetails,
          quantity: quantity,
          image: product.image,
        },
      ];
      toast.success("🦄 Item added to cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
    router.push("/cart");
  };

  const removeFromCart = (productId, selectedVariation) => {
    const updatedCart = cart.filter(
      (item) =>
        !(item.id === productId && item.selectedVariation === selectedVariation)
    );

    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
  };

  useEffect(() => {
    // Sync cart with localStorage whenever the cart changes
    if (cart.length === 0) {
      localStorage.removeItem("cart"); // Remove cart if empty
    } else {
      saveCartToLocalStorage(cart);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
