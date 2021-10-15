import React from 'react'
import uuidv4 from 'uuid/v4'

function Product({ product, dispatch }) {

  function handleAddToCart() {
    const newProduct = {...product, cartID: uuidv4() }
    dispatch({ type: 'ADD_TO_CART', payload: newProduct })
  }

  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title}/>
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span> $ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart}>Buy</button>
    </div>
  )
}

export { Product }
