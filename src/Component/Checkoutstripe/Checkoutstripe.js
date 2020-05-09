import React, { useState, useContext } from 'react';
import './Checkoutstripe.css'
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
  } from "@stripe/react-stripe-js";
import { DataContext } from '../../App';
import { Link } from 'react-router-dom';
const CheckoutForm = () => {

    const [cardError, setCardError] = useState(null);
    const {plan, setPlan} = useContext(DataContext);
    const {formInfo, setFormInfo} = useContext(DataContext);
    const {payMethod, setPayMethod} = useContext(DataContext);
    const stripe = useStripe();
    const elements = useElements();

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    });
    console.log(paymentMethod)
    if(error){
        setCardError(error.message);
        setPayMethod(null);
    }else{
        setPayMethod(paymentMethod);
        setCardError(null);
    }

    const data2 = {shipment: formInfo, plan, paymentMethod};
    fetch('http://localhost:4200/addCustomer',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data2)
    })
    .then(res => res.json())
    .then(data2=>{
        console.log("added", data2)
    })
  }


  return (
    <form onSubmit={handleSubmit} id="card-body">
                {
                    cardError && <h3 className="text-danger mt-5">{cardError}</h3>
                }
                {
                    payMethod  &&  <h3 className="text-success mt-5">Payment Successfull {payMethod.id} </h3>
                }
                <div className="row mt-5">
                    <div className="col">
                        <h6>CARD NUMBER</h6>
                        <CardNumberElement>
                        <input type="text" className="form-control" id="cardnumber" placeholder=""></input>
                        </CardNumberElement>
                    </div>
                    
                </div>
                <div className="row mt-5">
                    <div className="col-md-7">
                        <h6>Name on card</h6>
                        <input type="text" className="form-control" id="nameoncard"></input>
                    </div>
                    <div className="col-md-3">
                        <h6>Expiry Date</h6>
                        <CardExpiryElement>
                        <input type="text" className="form-control" placeholder="MM/YY" id="expire"></input>
                        </CardExpiryElement>
                    </div>
                    
                    <div className="col-md-2">
                        <h6>CVV Code</h6>
                        <CardCvcElement>
                        <input type="text" className="form-control" id="code"></input>
                        </CardCvcElement>
                    </div>
                    
                </div>
                {
                    formInfo ?
              
                   <button className="main-button mt-5" type="submit"  disabled={!stripe}>
                    <h2>NEXT</h2>
                    </button>
          
                    :
                    <button disabled className="main-button mt-5 disabled" type="submit">
                    <h2>NEXT</h2>
                    </button> 
                }
                
                </form>
   
  );
};

export default CheckoutForm;
