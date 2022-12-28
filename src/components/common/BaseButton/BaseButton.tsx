import React from "react";
import './BaseButton.scss'

const BaseButton = (props : any) => {
  return (
    <button className="base-button" onClick={props.handleOnClick} 
    style={{backgroundColor: `${props.background}`, color: `${props.color}`, borderRadius: `${props.borderRadius}`}}>
      {props.content}
      {props.children}
    </button>
  )
}

export default BaseButton
