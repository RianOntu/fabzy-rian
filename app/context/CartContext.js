"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(null);
  const { id } = useParams();
  const [productsWithSimilarCategory, setProductsWithSimilarCategory] =
    useState([]);

  useEffect(() => {
    axios
      .get(`https://admin.ezicalc.com/api/public/products/get/15`)
      .then((response) => {
        const fetchedData = response?.data?.data?.data || [];
        setData(fetchedData);

        // Get the ID from the URL params

        if (!id) return; // Avoid running the logic if id is undefined

        const singleData = fetchedData.find((d) => d.id == id);
        setCategory(singleData?.category?.name);

        const products_with_same_category = fetchedData.filter(
          (d) => d?.category?.name == singleData?.category?.name && d?.id != id
        );
        setProductsWithSimilarCategory(products_with_same_category);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [productsWithSimilarCategory, category, data]);

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
    if (!selectedVariation) {
      toast.error("⚠️ Please select a variant before adding to cart!");
      return;
    }
    if (selectedVariation.stock < 1) {
      toast.error("❌ This product is out of stock!");
      return;
    }

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
            id: product?.id,
            name: product?.name,
            price: product?.selectedVariation?.price,
            stock: product?.selectedVariation?.stock,
            selectedVariation: selectedVariation,
            quantity: quantity,
            image: product?.image,
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
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        productsWithSimilarCategory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
