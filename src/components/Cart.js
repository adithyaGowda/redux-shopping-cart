import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { setShowCart } from "../app/cart-slice";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleCartView = () => {
    dispatch(setShowCart());
  };

  return (
    <div className="cartIcon" onClick={handleCartView}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
