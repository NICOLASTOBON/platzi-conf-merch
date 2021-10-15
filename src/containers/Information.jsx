import React, { useRef, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { AppContext } from '../context/AppContext'

import '../styles/components/Information.css'

function Information() {
  const { state, dispatch } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();

  const { cart } = state;

  function handleSubmit() {
    const formData = new FormData(form.current);
    const buyer = Object.fromEntries(formData);
    dispatch({ type: 'ADD_TO_BUYER', payload: buyer});
    history.push('/checkout/payment');
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="addres" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <Link to="/checkout">
            <div className="Information-back">Regresar</div>
          </Link>
          <Link to="/checkout/payment">
            <button
              type="submit"
              className="Information-next"
              onClick={handleSubmit}
            >
              pagar
            </button>
          </Link>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {
          cart.map((item) => (
            <div className="Information-item" key={item.cartID}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export { Information }