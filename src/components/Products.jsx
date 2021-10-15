import React, { useContext } from 'react'

import { Product } from './Product'

import { AppContext } from '../context/AppContext'

import '../styles/components/Products.css'

function Products() {

  const { state, dispatch } = useContext(AppContext);
  const { products } = state;

  return (
    <div className="Products">
      <div className="Products-items">
        {
          products.map(
            product => 
              <Product
                key={product.id}
                product={product}
                dispatch={dispatch}
              />
          )
        }
      </div>
    </div>
  )
}

export { Products }
