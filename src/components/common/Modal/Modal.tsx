import React from 'react'
import ReactDOM from 'react-dom'

import CartList from '../../CartList/CartList'
import './Modal.scss'

const CartModal = (props: any) => {
  return (
    <div className="cart-modal">
      <CartList handleOnClick={props.handleOnClick} />
    </div>
  )
}

const Modal = (props: any) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <CartModal handleOnClick={props.handleOnClick} />,
        document.getElementById('modal') as HTMLElement,
      )}
    </React.Fragment>
  )
}

export default Modal
