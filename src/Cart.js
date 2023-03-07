import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>Products</p>
        </div>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    );
  }
}

export default Cart;
