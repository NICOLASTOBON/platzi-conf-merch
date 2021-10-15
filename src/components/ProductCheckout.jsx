import React from "react";

import '../styles/components/Checkout.css'

function ProductCheckout({ product, dispatch }) {

  function handleRemove() {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }

  return (
    <div className="Checkout-item">
      <div className="Checkout-element">
        <h4>{product.title}</h4>
        <span>${product.price}</span>
      </div>
      <button type="button" onClick={handleRemove}>
        <i className="fas fa-trash-alt" />
      </button>
  </div>
  )
}

export { ProductCheckout }
