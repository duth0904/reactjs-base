import React from "react";

import BaseButton from "../common/BaseButton/BaseButton";
import { useCartContext } from "../../context/CartContext";
import './CartItem.scss'

const CartItem = (props : any) => {
  const {addToCart, removeFromCart} = useCartContext()

  const handleAddToCart = () => {
    addToCart(itemData.id)
  }

  const hanldeRemoveFromCart = () => {
    removeFromCart(itemData.id)
  }

  const {itemData} = props
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <div className="name">{itemData.name}</div>
        <div className="price-quantity">
          <div className="price">{itemData.price}</div>
          <div className="quantity">x {itemData.quantity}</div>
        </div>
      </div>

      <div className="cart-item-right">
        <BaseButton
          content="-"
          color="red"
          background="#fff"
          borderRadius="4px"
          handleOnClick={hanldeRemoveFromCart}
        />
        <BaseButton
          content="+"
          color="red"
          background="#fff"
          borderRadius="4px"
          handleOnClick={handleAddToCart}
        />
      </div>
    </div>
  )
}

export default CartItem
