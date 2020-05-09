import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="row p-5 text-white">
          <div className="col-md-2">
            <h2 className="text-white">POWER <span style={{color:'yellow'}}>X</span></h2>
          </div>
          <div className="col-md-2">
            <h4 className="mb-3">Need Help?</h4>
            <a href="/">Help Center</a>
            <a href="/">Email Support</a>
            <a href="/">Live Chat</a>
            <a href="/">Gift Certificates</a>
            <a href="/">Send Us Feedback</a>
          </div>
          <div className="col-md-2">
            <h4 className="mb-3">Digital Resources</h4>
            <a href="/">Articles</a>
            <a href="/">E-books</a>
          </div>
          <div className="col-md-3">
            <h4 className="mb-3 ">Connect whith Us</h4>
         
            <img src="../../img/bxl-facebook.png" alt=""></img>
            <img src="../../img/bxl-instagram.png" alt=""></img>
            <img src="../../img/bxl-twitter.png" alt=""></img>
            <img src="../../img/bxl-whatsapp.png" alt=""></img>
            <img src="../../img/bxl-youtube.png" alt=""></img>

            <a className="mt-2" href="/">Forum</a>
          </div>
          <div className="col-md-3">
            <h4 className="mb-3">Join Our Newsletter</h4>
            Get exclusive news, features and updates from the Shredder Wiight Loss Academy.
          </div>
        </div>
        </div>
    );
};

export default Footer;