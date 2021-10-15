import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import { Map } from '../components/Map'
import '../styles/components/Success.css';

import { useGoogleApiAddress } from '../hooks/useGoogleApiAddress'

function Success() {

  const { state } = useContext(AppContext);
  const { buyer } = state;

  const { map } = useGoogleApiAddress();

  return (
    <div className="Succes">
      {
        buyer.length > 0 
          ?
            <div className="Success-content">
              <h2>{buyer[0].name}, Gracias por tu compra</h2>
              <span>Tu pedido llegara en 3 dias a tu dirección:</span>
              <div className="Success-map">
                <Map location={map}/>
              </div>
            </div>
          :
            <div className="Success-content">
              <h2>No tienes ninguna solicitud the compras</h2>
            </div>
      }
    </div>
  );
};

export { Success }
