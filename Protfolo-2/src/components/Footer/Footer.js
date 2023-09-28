import React from 'react';
import './Footer.css';
import Logo1 from '../../pic/logo.png'

const Footer = () => {
    return (
        <>
          <footer>
              <div className="container text-center top">
                  <div className="img">
                       <img src={Logo1} alt="" />
                  </div>
                  <p>2023. all right reserved by GorkCoder Times</p>
              </div>
             </footer>   
        </>
    );
};

export default Footer;