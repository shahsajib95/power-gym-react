import React, { useState, useContext }  from 'react';
import './Personpayment.css'
import { DataContext } from '../../App';
// import { DataContext } from '../../App';
import { Link } from 'react-router-dom';

const Personpayment = (props) => {


    // const contextData = useContext(DataContext);
    // const plan = contextData.plan;
    const {formInfo, setFormInfo} = useContext(DataContext);
    const {plan, setPlan} = useContext(DataContext);
    
    const {firstname, lastname, email, phone, date, month, year, gender, address, country, city, postcode} = setFormInfo;

    const submitFormHandler = (e) =>{
        
        e.preventDefault();
        const data = ({...formInfo, [e.target.name]: e.target.value});
        setFormInfo(data)
        

    }

    // const submitForm = () =>{
    //     const data2 = {shipment: formInfo, plan};
    //     fetch('http://localhost:4200/addCustomer',{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data2)
    // })
    // .then(res => res.json())
    // .then(data2=>{
    //     console.log("added", data2);

    // })
    // }
    
    
    return (
        <div>
            <div className="price-banner"> 
                <h1 className="text-center">YOUR GYM MEMBERSHIP</h1>
            </div>
        <div className="persondetails-form mt-5 mb-5">
                <div className="container">
                
            
                <ul id="progressbar" className="d-flex justify-content-around">
                    <li className="actives" id="details">1</li>
                    <div className="dot"></div>
                    <li id="payment">2</li>
                    <div className="dot"></div>
                    <li id="membership">3</li>
                </ul>

          
                <form>
                    <div className="row mt-5">
                    <div className="col">
                        <h6>First Name</h6>
                        <input type="text" name="firstname" className="form-control" value={firstname} onBlur={submitFormHandler}></input>
                    </div>
                    <div className="col">
                        <h6>Last Name</h6>
                        <input type="text" name="lastname" className="form-control" value={lastname} onBlur={submitFormHandler}></input>
                    </div>
                    </div>
                    <div className="row mt-5">
                    <div className="col">
                        <h6>Email</h6>
                        <input type="text" name="email" className="form-control" value={email} onBlur={submitFormHandler}></input>
                    </div>
                    <div className="col">
                        <h6>Mobile Number</h6>
                        <input type="text" name="phone" className="form-control" value={phone} onBlur={submitFormHandler}></input>
                    </div>
                    </div>


                    <div className="row mt-5">
                    <div className="col-md-6">
                        <h6>Date of Birth</h6>
                        <div className="row">
                        <div className="col-md-4">
                            <input type="text" name="date" className="form-control" placeholder="date" value={date} onBlur={submitFormHandler}></input>
                        </div>
                        <div className="col-md-4">
                            <input type="text" name="month" className="form-control" placeholder="month" value={month} onBlur={submitFormHandler}></input>
                        </div>
                        <div className="col-md-4">
                            <input type="text" name="year" className="form-control" placeholder="year" value={year} onBlur={submitFormHandler}></input>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6>Gender</h6>
                        <select className="custom-select" value={gender} name="gender" onBlur={submitFormHandler}>
                        <option selected disabled>Other..</option>
                        <option value="male">Male</option>
                        <option value="female">FeMale</option>
                        <option value="other">Other</option>
                        </select>
                    </div>
                    </div>

                    <div className="row mt-5">
                    <div className="col">
                        <h6>Adress line 1</h6>
                        <input type="text" name="address" className="form-control" value={address} onBlur={submitFormHandler}></input>
                    </div>
                    <div className="col">
                        <h6>Country/Region</h6>
                        <input type="text" name="country" className="form-control" value={country} onBlur={submitFormHandler}></input>
                    </div>
                    </div>
                    <div className="row mt-5">
                    <div className="col">
                        <h6>City</h6>
                        <input type="text" name="city" className="form-control" value={city} onBlur={submitFormHandler}></input>
                    </div>
                    <div className="col">
                        <h6>Post Code</h6>
                        <input type="text" name="postcode" className="form-control" value={postcode} onBlur={submitFormHandler}></input>
                    </div>
                    </div>
                   
                  { plan && formInfo ?
                      <Link to ="/finalpay">
                   <button className="main-button mt-5" type="submit">
                    <h2>NEXT</h2>
                    </button> 
                    </Link>
                    :
                    <button disabled className="main-button mt-5" type="submit">
                    <h2>NEXT</h2>
                    </button> 
                 }
                    
                </form>
         
                                
                </div>
            </div>

           
            </div>
            
    );
};

export default Personpayment;