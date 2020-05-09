import React, { useState } from 'react';
import './Payment.css'
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Checkoutstripe/Checkoutstripe';
const Payment = () => {

    const [showPayment, setShowPayment] =  useState(false)

    const stripeRadio = () => setShowPayment(true)

    const stripePromise = loadStripe('pk_test_pS06V8JIFXeKVNV03PxEcd3Y00uNbBWVhq');

    return (
        <div class="container">
            
            <div className="payment-box mt-5 p-5 mb-5">

                <div className="container">
                <div className="row">
                <div className="col-md-8">
                    <div className="custom-control custom-radio">
                        <input type="radio" id="stripeRadio" name="customRadio" className="custom-control-input" onClick={stripeRadio}/>
                        <label className="custom-control-label" for="stripeRadio">
                            <h4>Credit Card</h4>
                        </label>
                        
                    </div>
                    </div>
                    <p className="text-secondary">Safe money transfer using Visa, Master, Discover, Amrican Express.</p>
                </div>

                <div className="col-md-4">
                    <img src="../../img/credit-cards_visa.png" alt="" />
                    <img src="../../img/credit-cards_mastercard.png" alt=""/>
                    <img src="../../img/credit-cards_amex.png" alt=""/>
                </div>
                </div>
               
                {   showPayment &&
            
                <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
                </Elements>
                }

                
               
                </div>
        </div>
    );
};

export default Payment;