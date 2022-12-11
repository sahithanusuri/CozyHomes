import React from 'react';

function Reservation(product){
    console.log("inside Reservation");
    const Property = product
    return(
        <div>
    
          <img src={product.path}  width="250" height="250"></img>
          <h4> <strong> { product.title } </strong></h4>
          <p>
            <b>Price per night: </b>{product.nightlyfee}<br></br>
            <b>Property type: </b>{product.propertytype}<br></br>
            <b>City: </b>{product.city}<br></br>
    
          </p>                
        </div>
      );
}

export default Reservation;