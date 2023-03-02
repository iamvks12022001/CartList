import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      ProductName: "mobile",
      Price: 999,
      Quantity: 1,
    };
  }
  render() {
    return (
      <div>
        <div style={Style.CartItemGap}>
          <p> ProductName : {this.state.ProductName}</p>
          <p> Price : {this.state.Price}</p>
          <p> Quantity : {this.state.Quantity}</p>
        </div>
      </div>
    );
  }
}

const Style = {
  CartItemGap: {
    border: "5px solid rgba(0, 0, 0, 0.05)",
  },
};
export default CartItem;
