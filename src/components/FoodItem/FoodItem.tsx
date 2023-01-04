import React, { useState } from 'react'

import BaseButton from '../common/BaseButton/BaseButton'
import { useCartContext } from '../../context/CartContext'
import './FoodItem.scss'

const FoodItem = (props: any) => {
  const { foodItem } = props
  const [quantity, setQuantity] = useState(0)
  const { addToCart } = useCartContext()

  const handleAddToCart = () => {
    setQuantity((quantity: number) => quantity + 1)
    addToCart(foodItem.id)
  }

  return (
    <div className="food-item">
      <div className="left">
        <div className="name">{foodItem.name}</div>
        <div className="description">{foodItem.description}</div>
        <div className="price">{`${foodItem.price}`}</div>
      </div>
      <div className="right">
        <div className="quantity">Amount {quantity}</div>
        <BaseButton content="+ Add" handleOnClick={handleAddToCart} />
      </div>
    </div>
  )
}

export default FoodItem
