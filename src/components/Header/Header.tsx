import React, { useState } from "react";

import BaseButton from "../common/BaseButton/BaseButton";
import Modal from "../common/Modal/Modal";
import { useCartContext } from "../../context/CartContext";
import './Header.scss'

const Header = () => {
	const [isOpenCart, setIsOpenCart] = useState(false)
	const {totalQuantity} = useCartContext()

	const handleOpenCart = () => {
		setIsOpenCart(true)
	}

	const handleCloseCart = () => {
		setIsOpenCart(false)
	}

	return (
		<div className="header">
			{
				isOpenCart && <Modal handleOnClick={handleCloseCart} />
			}
			<div className="header-title">
				Meals
			</div>
			<BaseButton content="Your cart" handleOnClick={handleOpenCart}>
				<span className="cart-quantity">{totalQuantity}</span>
			</BaseButton>
		</div>
	)
}

export default Header
