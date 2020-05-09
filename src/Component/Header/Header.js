import React from 'react';
import './Header.css'
import { useAuth } from '../Login/useAuth';

const Header = () => {

  const auth = useAuth();

  const handleSignOut = () =>{
    auth.signOut().then(res=>{
      window.location.pathname = '/';
    })
  }
 
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg" id="select">
            <div className="container">
            <a className="navbar-brand" href="/"><h2 className="text-white">POWER <span style={{color: 'yellow' }}>X</span></h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link ml-3 " href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ml-3" href="/">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ml-3 " href="/className.html">Our classNamees</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ml-3" href="/">About us</a>
                </li>
                {auth.user ?
                  <li className="nav-item">
                    <a className="nav-link ml-3" href="/dashboard">Dashboard</a>
                  </li>
                  :
                  <li className="nav-item">
                    <a className="nav-link ml-3" href="/Blog">Blog</a>
                  </li>
                  }
                  <li className="nav-item">
                    <a className="nav-link ml-3 active" href="pricing.html">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ml-3" href="/">Contact Us</a>
                  </li>
                  { auth.user ?
                    <li className="nav-item">
                    <a className="nav-link ml-3" href="/" onClick={ handleSignOut}>Log Out<span className="text-warning ml-2">Hi, {auth.user.displayName}</span></a>
                  </li>
                  :
                  <li className="nav-item">
                    <a className="nav-link ml-3" href="/login">Log in</a>
                  </li>
                  }
              </ul>
            </div>
            </div>
          </nav>
        </div>
        
        
    );
};

export default Header;