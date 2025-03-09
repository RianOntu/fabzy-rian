"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const CartPage = () => {
  const { removeFromCart, addToCart } = useContext(CartContext);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    // Only access localStorage on the client side
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const handleIncrease = (item) => {
    addToCart(item, item.selectedVariation, 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      addToCart(item, item.selectedVariation, -1);
    }
  };

  const handleRemove = (item) => {
    removeFromCart(item.id, item.selectedVariation);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-lg text-center">Your cart is empty</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item.id + item.selectedVariation}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg"
              >
                <img
                  src={`https://pub-c053b04a208d402dac06392a3df4fd32.r2.dev/15/image/${item.image}`}
                  alt={item.name}
                  className="w-24 h-24 object-conatain rounded"
                />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    Variation: {item.selectedVariation.values}
                  </p>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrease(item)}
                    className="px-2 py-1 bg-gray-300 rounded-full"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item)}
                    className="px-2 py-1 bg-gray-300 rounded-full"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={() => alert("Clear cart")}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg"
            >
              Clear Cart
            </button>
            <div className="text-lg font-semibold">
              <p>Total: ${getTotal()}</p>
              <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default CartPage;
