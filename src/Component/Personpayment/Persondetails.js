import React, { useState, useContext } from 'react';
import './Personpayment.css'

import { DataContext } from '../../App';

const Persondetails = () => {

    const contextData = useContext(DataContext);

    const [formInfo, setFormInfo] = useState([]);

    const {firstname, lastname, email, phone, date, month, year, gender, address, country, city, postcode} = setFormInfo;

    const submitFormHandler = (e) =>{
        e.preventDefault()
        setFormInfo({...formInfo, [e.target.name]: e.target.value});;
    }

    const submitForm = (e) =>{
        const data = formInfo;
        console.log(data);
    }
    return (
        <div>
            <form>
                    <div className="row mt-5">
                    <div className="col">
                        <h6>First Name</h6>
                        <input type="text" name="firstname" className="form-control" value={firstname} onChange={submitFormHandler}></input>
                    </div>
                    <div className="col">
                        <h6>Last Name</h6>
                        <input type="text" name="lastname" className="form-control" value={lastname} onChange={submitFormHandler}></input>
                    </div>
                    </div>
                    <div className="row mt-5">
                    <div className="col">
                        <h6>Email</h6>
                        <input type="text" name="email" className="form-control" value={email} onChange={submitFormHandler}></input>
                    </div>
                    <div className="col">
                        <h6>Mobile Number</h6>
                        <input type="text" name="phone" className="form-control" value={phone} onChange={submitFormHandler}></input>
                    </div>
                    </div>


                    <div className="row mt-5">
                    <div className="col-md-6">
                        <h6>Date of Birth</h6>
                        <div className="row">
                        <div className="col-md-4">
                            <input type="text" name="date" className="form-control" placeholder="date" value={date} onChange={submitFormHandler}></input>
                        </div>
                        <div className="col-md-4">
                            <input type="text" name="month" className="form-control" placeholder="month" value={month} onChange={submitFormHandler}></input>
                        </div>
                        <div className="col-md-4">
                            <input type="text" name="year" className="form-control" placeholder="year" value={year} onChange={submitFormHandler}></input>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6>Gender</h6>
                        <select className="custom-select">
                        <option disabled value={gender} name="gender" onChange={submitFormHandler}>Choose...</option>
                        <option>Male</option>
                        <option>FeMale</option>
                        <option>Other</option>
                        </select>
                    </div>
                    </div>

                    <div className="row mt-5">
                    <div className="col">
                        <h6>Adress line 1</h6>
                        <input type="text" name="address" className="form-control" value={address} onChange={submitFormHandler}></input>
                    </div>
                    <div className="col">
                        <h6>Country/Region</h6>
                        <input type="text" name="country" className="form-control" value={country} onChange={submitFormHandler}></input>
                    </div>
                    </div>
                    <div className="row mt-5">
                    <div className="col">
                        <h6>City</h6>
                        <input type="text" name="city" className="form-control" value={city} onChange={submitFormHandler}></input>
                    </div>
                    <div className="col">
                        <h6>Post Code</h6>
                        <input type="text" name="postcode" className="form-control" value={postcode} onChange={submitFormHandler}></input>
                    </div>
                    </div>
                    <button className="main-button mt-5" onClick={submitForm}>
                    <h2>NEXT</h2>
                    </button>
                </form>
                
        </div>
    );
};

export default Persondetails;