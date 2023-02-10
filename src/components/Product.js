import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/cart-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleAddCart}>Add to cart</button>
    </div>
  );
};

export default Product;
