import React, { useContext, useState } from 'react';
import './Pricing.css'
import {  Link } from 'react-router-dom';
import { DataContext } from '../../App';




const Pricing = () => {
    
const contextData = useContext(DataContext);
    
    const packages = 
  [{id: 1, bill: 'Billed Monthly', plan: 'Advance Plan', price: '$140', training: 'Strength Training'},
  {id: 2, bill: 'Billed Monthly', plan: 'Basic Plan', price: '$120', training: 'Weight Training'},
  {id: 3, bill: 'Billed Monthly', plan: 'Beginers Plan', price: '$90', training: 'Weight Loss Training'}]

  const [pckg, setPckg] = useState(packages);
    
  const buy =(pckg) =>{
    console.log('plan added' ,pckg)
    const newPlan = [...contextData.plan, pckg]
    contextData.setPlan(newPlan);
    console.log(newPlan);
}

    return (
        <div>
            <div className="price-banner"> 
                <h1 className="text-center">Pricing</h1>
            </div>
            <div className="container mt-5 mb-5">
            <h1 className="text-center"><span className="text-warning ">CHOOSE THE OFFER</span> THAT SUITS YOU</h1>
            <p className="p-5 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <div className="row">
                    {pckg.map(pckg=>
                        
                        <div className="col-md-4" key={pckg.id}>
                        <div className="price-box1 p-5 text-white">
                        <h5 className="text-warning text-center">{pckg.bill}</h5>
                        <h1 className="text-center">{pckg.plan}</h1>
                        <p className="big-price text-warning text-center">{pckg.price}</p>
                        <p><i className="fas fa-check ml-5" aria-hidden="true"></i>  {pckg.training}</p>
                        <Link to="/payment"><button className="main-button mt-5 ml-4" onClick={()=>buy(pckg)}><h2>Purchase</h2></button></Link>
                     </div>
                     </div>
                     
                    )}
                </div>
            </div>
        </div>
    
    );
};

export default Pricing;