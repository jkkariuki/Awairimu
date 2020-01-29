import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className='page-footer font-small unique-color-dark pt-4'>
        <div className='container'>
          <ul className='list-unstyled list-inline text-center py-2'>
            <li className='list-inline-item'>
              <a className='fb-ic'>
                <i className='fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </a>
              <a className='tw-ic'>
                <i className='fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </a>
              <a className='gplus-ic'>
                <i className='fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </a>
              <a className='li-ic'>
                <i className='fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </a>
              <a className='ins-ic'>
                <i className='fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </a>
              <a className='pin-ic'>
                <i className='fab fa-pinterest fa-lg white-text fa-2x'> </i>
              </a>
            </li>
          </ul>
        </div>

        <div className='footer-copyright text-center py-3' id='footer'>
          <div> © 2018 Copyright: www.awairimu.com</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
