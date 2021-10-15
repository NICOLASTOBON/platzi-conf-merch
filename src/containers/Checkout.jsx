import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { ProductCheckout } from "../components/ProductCheckout";

import { AppContext } from '../context/AppContext'

import '../styles/components/Checkout.css'


function Checkout() {
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;

  const totalCart = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>
          Lista de Pedidos: {cart.length > 0 ? cart.length : 'Sin pedidos...'}
        </h3>
        {
          cart.map(product =>
            <ProductCheckout
              product={product}
              key={product.cartID}
              dispatch={dispatch}
            />
          )
        }
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: ${totalCart}</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  )
}

export { Checkout }