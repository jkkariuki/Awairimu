import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class='page-footer font-small unique-color-dark pt-4'>
        <div class='container'>
          <ul class='list-unstyled list-inline text-center py-2'>
            <li class='list-inline-item'>
              <a class='fb-ic'>
                <i class='fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </a>
              <a class='tw-ic'>
                <i class='fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </a>
              <a class='gplus-ic'>
                <i class='fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </a>
              <a class='li-ic'>
                <i class='fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </a>
              <a class='ins-ic'>
                <i class='fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {" "}
                </i>
              </a>
              <a class='pin-ic'>
                <i class='fab fa-pinterest fa-lg white-text fa-2x'> </i>
              </a>
            </li>
          </ul>
        </div>

        <div class='footer-copyright text-center py-3' id='footer'>
          <div> © 2018 Copyright: www.awairimu.com</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
