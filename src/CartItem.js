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
        {/* <div style={Style.CartItemGap}>
          <p> ProductName : {this.state.ProductName}</p>
          <p> Price : {this.state.Price}</p>
          <p> Quantity : {this.state.Quantity}</p>
        </div> */}
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{this.state.title}</div>{" "}
          {/*inline styling*/}
          {/* <div style={{color:'#777'}}>Rs: {price}</div>
	                   <div style={{color:'#777'}}>Qty: {qty}</div> */}
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/png/128/992/992651.png"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/992/992683.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
            />
          </div>
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
