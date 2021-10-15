import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import { Product } from './Product'

import { AppContext } from '../context/AppContext'

import '../styles/components/Products.css'

function Products() {

  const [ products, setProducts ] = useState([])
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    axios('http://localhost:1337/products')
      .then(items => setProducts(items.data))
  }, [])

  return (
    <div className="Products">
      <div className="Products-items">
        {
          products.length > 0
            ?
              products.map(
                product => 
                  <Product
                    key={product.uid}
                    product={product}
                    dispatch={dispatch}
                  />
              )
            :
              <di>Loading...</di>
        }
      </div>
    </div>
  )
}

export { Products }
