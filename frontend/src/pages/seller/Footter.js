import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';


 import image4 from '../../assets/images/image4.jpg'

const Footter = () => {
  return (
    <footer className="bg-light text-dark mt-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-4 col-md-6 mb-4">
            <a
              href="/"
              className="d-flex align-items-center p-0 text-dark text-decoration-none"
            >
              <img alt="logo" src={image4} width="30px" />
              <span className="ms-3 h5 font-weight-bold">Shopify Online</span>
            </a>
            <p className="my-3" style={{ width: "250px" }}>
             Great news,Get Products with discount on Shopify !
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Shopify
            </p>
            <ul className="list-unstyled">
            
              {/* <li>
                <a href="/aboutus">About Us</a>
              </li> */}
            <li>
                <a href="/contact">Contact</a>
              </li> 
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Help
            </p>
            <ul className="list-unstyled">
              <li>
                <a href="/Customerregister">Sign Up</a>
              </li>
              <li>
                <a href="/Customerlogin">Sign In</a>
              </li>
             
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Services
            </p>
            <ul className="list-unstyled">
             
              <li>
                <a href="/devlivery">Delivery</a>
              </li>
            
            </ul>
          </div>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-auto">
            <a className="btn btn-dark p-2" href="https://www.facebook.com"   rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className="col-auto">
            <a className="btn btn-dark mx-3 p-2" href="https://www.twitter.com"   rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="col-auto">
            <a className="btn btn-dark p-2" href="https://www.instagram.com" target="_blank"   rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-auto">
            <small>&copy; Shopify, 2024. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footter;