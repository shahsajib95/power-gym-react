import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Dashboard.css'


const Dashboard = () => {

    const [member, setMember] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4200/customers')
        .then(res=> res.json())
        .then(data=>{
            setMember(data)
            console.log(data)
        })
    }, [])

    return (
            <div className="dashboard">
                <div className="container">
                 <div className="row">
                    {member.map(mb=>
                        <div className="col-md-6 mt-5 mb-5">
                                <h3>Member Id: {mb.paymentMethod.id}</h3>
                                <h3>Member name: {mb.shipment.firstname} {mb.shipment.lastname}</h3>
                                <h3>Member Adress: {mb.shipment.address}</h3>
                        </div>
                        )}
                </div>
               </div>

               
            </div>
     
    );
};

export default Dashboard;