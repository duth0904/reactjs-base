import React, { useContext, createContext, useState } from 'react'

import { FOOD_DATA } from '../mockData'

const INIT_TOTAL_QUANTITY = 0
const INIT_TOTAL_PRICE = 0

const CartContext = createContext({
  dataCart: [],
  addToCart: (id: string) => {},
  totalQuantity: 0,
  totalPrice: 0,
  removeFromCart: (id: string) => {},
})

export const useCartContext = () => useContext(CartContext)

const CartProvider = (props: any) => {
  const [cartListData, setCartListData] = useState([])

  const addToCart = (id: string) => {
    setCartListData((cartListData: any) => {
      const foodItem = FOOD_DATA.find((item: any) => item.id === id)
      if (cartListData.find((item: any) => item.id === id)) {
        return cartListData.map((item: any) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          } else {
            return item
          }
        })
      } else {
        return [...cartListData, { ...foodItem, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id: string) => {
    setCartListData((cartListData: any) => {
      if (cartListData.find((item: any) => item.id === id).quantity > 1) {
        return cartListData.map((item: any) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      } else {
        return cartListData.filter((item: any) => item.id !== id)
      }
    })
  }

  const totalQuantity = cartListData.reduce((total: number, item: any) => {
    total += item.quantity
    return total
  }, INIT_TOTAL_QUANTITY)

  const totalPrice = cartListData.reduce((total: any, item: any) => {
    total += item.quantity * item.price
    return total
  }, INIT_TOTAL_PRICE)

  return (
    <CartContext.Provider
      value={{
        dataCart: cartListData,
        addToCart,
        totalQuantity,
        totalPrice,
        removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
