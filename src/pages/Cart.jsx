// src/pages/Cart.js
import React, { useEffect, useState } from "react";
import NewHeader from "../components/NewHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, [location]);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className={`${isVisible ? "opacity-100 duration-[1000ms]" : "opacity-0"} custom-font`}>
      <NewHeader />
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#333",
          textAlign: "center",
          margin: "2rem 0",
        }}
      >
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="p-4">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4 p-2 border-b">
              <div className="flex items-center">
                <img src={item.img} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p>${(item.price || 0).toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-4">
            <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
