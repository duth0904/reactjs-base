import React from "react";

import BaseButton from "../common/BaseButton/BaseButton";
import CartItem from "../CartItem/CartItem";
import { useCartContext } from "../../context/CartContext";
import './CartList.scss'

const CartList = (props : any) => {
  const {dataCart, totalPrice} = useCartContext()
  return (
    <div className="cart-list">
      {
        dataCart.length > 0
          ? dataCart.map((item : any) =>
            <CartItem key={item.id} itemData={item} />
          )
          : <div>Cart empty!</div>
      }
      <div className="cart-list-header">
        <div className="header-cart">
          <div className="title">Total amount</div>
          <div className="price">{totalPrice}$</div>
        </div>
        <div className="footer">
          <BaseButton content="Close" background="#fff" color="#000" handleOnClick={props.handleOnClick} />
          <BaseButton content="Order" />
        </div>
      </div>
    </div>
  )
}

export default CartList
