import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className='page-footer font-small unique-color-dark pt-4'>
        <div className='container'>
          <ul className='list-unstyled list-inline text-center py-2'>
            <li className='list-inline-item'>
              <Link to='' className='fb-ic'>
                <i className='fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </Link>
              <Link to='' className='tw-ic'>
                <i className='fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </Link>
              <Link to='' className='gplus-ic'>
                <i className='fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </Link>
              <Link to='' className='li-ic'>
                <i className='fab fa-Link toedin-in fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </Link>
              <Link to='' className='ins-ic'>
                <i className='fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </Link>
              <Link to='' className='pin-ic'>
                <i className='fab fa-pinterest fa-lg white-text fa-2x'> </i>
              </Link>
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
