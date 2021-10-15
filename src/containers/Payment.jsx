import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import { AppContext } from '../context/AppContext'

import '../styles/components/Payment.css';

function Payment() {
  const { state, dispatch } = useContext(AppContext);
  const history = useHistory();
  const { cart, buyer } = state;

  const totalValue = cart.reduce((acc, curr) => acc + curr.price, 0)

  const paypalOptions = {
    clientId: process.env.CLIENT_ID_PAYPAL,
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  function handlePaymentSuccess(data) {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      dispatch({ type: 'ADD_TO_ORDERS', payload: newOrder });
      history.push('/checkout/success');
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map(item => (
            <div className="Payment-item" key={item.cartID}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </div>
            </div>
          ))
        }
        <div className="Payment-item">
          <div className="Payment-element total">
            <h4>Total:</h4>
            <span>$ {totalValue}</span>
          </div>
        </div>
        <div className="Payment-button">
        <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={totalValue}
            onPaymentStart={() => console.log('Start Payment')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div/>
    </div>
  );
};

export { Payment };