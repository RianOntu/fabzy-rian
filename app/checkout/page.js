"use client";
import { useContext, useState } from "react";
import { CartContext, useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import VITE_API_BASE_URL_IMG from "../BaseImage";

const CheckoutPage = () => {
  const { cart } = useCart();
  const { clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    paymentMethod: "cashOnDelivery",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getTotal = () => {
    return cart.reduce(
      (total, item) =>
        total + Number(item?.selectedVariation?.price) * Number(item?.quantity),
      0
    );
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
            <form onSubmit={handleCheckout} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="cashOnDelivery">Cash on Delivery</option>
                <option value="creditCard">Credit Card</option>
              </select>
              <button
                type="submit"
                className="w-full py-2 bg-green-500 text-white rounded-lg"
              >
                Place Order
              </button>
            </form>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cart.length === 0 ? (
              <p className="text-lg">Your cart is empty</p>
            ) : (
              <div>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center py-2 border-b"
                  >
                    <img
                      src={`${VITE_API_BASE_URL_IMG}/${item.image}`}
                      alt={item.name}
                      className="w-16 h-16 object-contain rounded mr-4"
                    />
                    <div className="flex-1">
                      <span className="block font-medium">
                        {item.name} ({item.quantity}x)
                      </span>
                      <span className="text-gray-500 text-sm">
                        Variation: {item.selectedVariation.values}
                      </span>
                    </div>
                    <span className="font-semibold">
                      BDT{" "}
                      {Number(item.selectedVariation.price) *
                        Number(item.quantity)}
                    </span>
                  </div>
                ))}
                <hr className="my-4" />
                <p className="text-lg font-semibold">Total: BDT {getTotal()}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default CheckoutPage;
