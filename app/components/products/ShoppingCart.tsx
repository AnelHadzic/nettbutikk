import React from "react";

const ShoppingCart = (props) => {
  return (
    <>
      {props.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </>
  );
};

export default ShoppingCart;
