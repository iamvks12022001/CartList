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
        <div>
          <p> ProductName : {this.state.ProductName}</p>
          <p> Price : {this.state.Price}</p>
          <p> Quantity : {this.state.Quantity}</p>
        </div>
      </div>
    );
  }
}

export default CartItem;
